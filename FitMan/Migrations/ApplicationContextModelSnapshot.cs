﻿// <auto-generated />
using System;
using FitMan.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FitMan.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FitMan.Models.Course", b =>
                {
                    b.Property<long>("CourseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("DefaultPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("GymId")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Schedule")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CourseId");

                    b.HasIndex("GymId");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("FitMan.Models.CourseExercise", b =>
                {
                    b.Property<long>("CourseExerciseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("CourseId")
                        .HasColumnType("bigint");

                    b.Property<long>("ExerciseId")
                        .HasColumnType("bigint");

                    b.HasKey("CourseExerciseId");

                    b.HasIndex("CourseId");

                    b.HasIndex("ExerciseId");

                    b.ToTable("CourseExercise");
                });

            modelBuilder.Entity("FitMan.Models.CourseParticipant", b =>
                {
                    b.Property<long>("CourseParticipantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("CourseId")
                        .HasColumnType("bigint");

                    b.Property<long>("ParticipantId")
                        .HasColumnType("bigint");

                    b.HasKey("CourseParticipantId");

                    b.HasIndex("CourseId");

                    b.HasIndex("ParticipantId");

                    b.ToTable("CourseParticipant");
                });

            modelBuilder.Entity("FitMan.Models.Exercise", b =>
                {
                    b.Property<long>("ExerciseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ExerciseId");

                    b.ToTable("Exercise");
                });

            modelBuilder.Entity("FitMan.Models.Gym", b =>
                {
                    b.Property<long>("GymId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("OwnerId")
                        .HasColumnType("bigint");

                    b.HasKey("GymId");

                    b.HasIndex("OwnerId");

                    b.ToTable("Gym");
                });

            modelBuilder.Entity("FitMan.Models.Review", b =>
                {
                    b.Property<long>("ReviewId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("CourseId")
                        .HasColumnType("bigint");

                    b.Property<long?>("GymId")
                        .HasColumnType("bigint");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.Property<long?>("TrainerId")
                        .HasColumnType("bigint");

                    b.HasKey("ReviewId");

                    b.HasIndex("CourseId");

                    b.HasIndex("GymId");

                    b.HasIndex("TrainerId");

                    b.ToTable("Review");
                });

            modelBuilder.Entity("FitMan.Models.Trainer", b =>
                {
                    b.Property<long>("TrainerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("CourseId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<int>("ExperienceYears")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TrainerId");

                    b.HasIndex("CourseId");

                    b.ToTable("Trainer");
                });

            modelBuilder.Entity("FitMan.Models.User", b =>
                {
                    b.Property<long>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserRole")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasFilter("[Email] IS NOT NULL");

                    b.ToTable("User");

                    b.HasDiscriminator<string>("UserRole").HasValue("User");
                });

            modelBuilder.Entity("FitMan.Models.Owner", b =>
                {
                    b.HasBaseType("FitMan.Models.User");

                    b.HasDiscriminator().HasValue("Owner");
                });

            modelBuilder.Entity("FitMan.Models.Participant", b =>
                {
                    b.HasBaseType("FitMan.Models.User");

                    b.HasDiscriminator().HasValue("Participant");
                });

            modelBuilder.Entity("FitMan.Models.Course", b =>
                {
                    b.HasOne("FitMan.Models.Gym", "Gym")
                        .WithMany("Courses")
                        .HasForeignKey("GymId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Gym");
                });

            modelBuilder.Entity("FitMan.Models.CourseExercise", b =>
                {
                    b.HasOne("FitMan.Models.Course", "Course")
                        .WithMany("CourseExercises")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FitMan.Models.Exercise", "Exercise")
                        .WithMany("CourseExercises")
                        .HasForeignKey("ExerciseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");

                    b.Navigation("Exercise");
                });

            modelBuilder.Entity("FitMan.Models.CourseParticipant", b =>
                {
                    b.HasOne("FitMan.Models.Course", "Course")
                        .WithMany("CourseParticipants")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FitMan.Models.Participant", "Participant")
                        .WithMany("CourseParticipants")
                        .HasForeignKey("ParticipantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");

                    b.Navigation("Participant");
                });

            modelBuilder.Entity("FitMan.Models.Gym", b =>
                {
                    b.HasOne("FitMan.Models.Owner", "GymOwner")
                        .WithMany("Gyms")
                        .HasForeignKey("OwnerId");

                    b.Navigation("GymOwner");
                });

            modelBuilder.Entity("FitMan.Models.Review", b =>
                {
                    b.HasOne("FitMan.Models.Course", "Course")
                        .WithMany("Reviews")
                        .HasForeignKey("CourseId");

                    b.HasOne("FitMan.Models.Gym", "Gym")
                        .WithMany("Reviews")
                        .HasForeignKey("GymId");

                    b.HasOne("FitMan.Models.Trainer", "Trainer")
                        .WithMany("Reviews")
                        .HasForeignKey("TrainerId");

                    b.Navigation("Course");

                    b.Navigation("Gym");

                    b.Navigation("Trainer");
                });

            modelBuilder.Entity("FitMan.Models.Trainer", b =>
                {
                    b.HasOne("FitMan.Models.Course", "Course")
                        .WithMany("Trainers")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("FitMan.Models.Course", b =>
                {
                    b.Navigation("CourseExercises");

                    b.Navigation("CourseParticipants");

                    b.Navigation("Reviews");

                    b.Navigation("Trainers");
                });

            modelBuilder.Entity("FitMan.Models.Exercise", b =>
                {
                    b.Navigation("CourseExercises");
                });

            modelBuilder.Entity("FitMan.Models.Gym", b =>
                {
                    b.Navigation("Courses");

                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("FitMan.Models.Trainer", b =>
                {
                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("FitMan.Models.Owner", b =>
                {
                    b.Navigation("Gyms");
                });

            modelBuilder.Entity("FitMan.Models.Participant", b =>
                {
                    b.Navigation("CourseParticipants");
                });
#pragma warning restore 612, 618
        }
    }
}
