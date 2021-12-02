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
        public DbSet<CourseExercise> CourseExercises { get; set; }
        public DbSet<CourseParticipant> CourseParticipants { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
            modelBuilder.Entity<User>().ToTable("User")
                                       .HasDiscriminator<string>("UserRole")
                                       .HasValue<Owner>("Owner")
                                       .HasValue<Participant>("Participant");
            modelBuilder.Entity<Owner>().HasBaseType<User>();
            modelBuilder.Entity<Participant>().HasBaseType<User>();
            modelBuilder.Entity<Course>().ToTable("Course");
            modelBuilder.Entity<Exercise>().ToTable("Exercise");
            modelBuilder.Entity<Gym>().ToTable("Gym");
            modelBuilder.Entity<Trainer>().ToTable("Trainer");
            modelBuilder.Entity<Review>().ToTable("Review");
            modelBuilder.Entity<CourseExercise>().ToTable("CourseExercise")
                                                 .HasOne(c => c.Course)
                                                 .WithMany(ce => ce.CourseExercises)
                                                 .HasForeignKey(ci =>ci.CourseId);
            modelBuilder.Entity<CourseExercise>().ToTable("CourseExercise")
                                                 .HasOne(c => c.Exercise)
                                                 .WithMany(ce => ce.CourseExercises)
                                                 .HasForeignKey(ci => ci.ExerciseId);
            modelBuilder.Entity<CourseParticipant>().ToTable("CourseParticipant")
                                                    .HasOne(c => c.Course)
                                                    .WithMany(ce => ce.CourseParticipants)
                                                    .HasForeignKey(ci => ci.CourseId);
            modelBuilder.Entity<CourseParticipant>().ToTable("CourseParticipant")
                                                    .HasOne(c => c.Participant)
                                                    .WithMany(ce => ce.CourseParticipants)
                                                    .HasForeignKey(ci => ci.ParticipantId);
        }

    }
}
