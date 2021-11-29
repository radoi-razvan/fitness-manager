using System.Collections.Generic;

namespace FitMan.Models
{
    public class Owner : User
    { 
        public List<Gym> Gyms { get; set; }
    }
}
