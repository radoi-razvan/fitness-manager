using AutoMapper;
using FitMan.Data;
using FitMan.Data.Repositories;
using FitMan.Services;
using FitMan.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using FitMan.Data.Repositories.Interfaces;
using FitMan.Services.Interfaces;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;

namespace FitMan
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public object JwtBearerDefaults { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(Configuration.GetConnectionString("FitManConnection")));
            // Enable Cors
            services.AddCors(options =>
            {
                options.AddPolicy("ReactApp",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000");
                    });
            });

            //JSON Serializer
            services.AddControllersWithViews().AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
            .Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
            = new DefaultContractResolver());

            services.AddControllers();

            // Swagger configuration
            services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new OpenApiInfo { Title = "FitMan", Version = "v1" }); });

            // Intilialize repositories and services
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<JwtService>();
            services.AddScoped<IGymRepository, GymRepository>();
            services.AddScoped<IGymService, GymService>();
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<IExerciseRepository, ExerciseRepository>();
            services.AddScoped<IExerciseService, ExerciseService>();
            services.AddScoped<IParticipantRepository, ParticipantRepository>();
            services.AddScoped<IParticipantService, ParticipantService>();
            services.AddScoped<ITrainerRepository, TrainerRepository>();
            services.AddScoped<ITrainerService, TrainerService>();
            services.AddScoped<IReviewRepository, ReviewRepository>();
            services.AddScoped<IReviewService, ReviewService>();

            // Auto Mapper Configurations
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddAuthentication();
            services.AddAuthorization();

            services.AddMvc();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //Swagger configuration
                app.UseSwagger(); 
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "FitMan v1"));
            }

            app.UseRouting();

            // Client configuration
            app.UseCors(builder => builder
              .WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials()
              .SetIsOriginAllowed(host => true));

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
