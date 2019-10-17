using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication4.Modules
{
    public class Employee
    {
        [Key]

        public int EmployeeId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Dateofbrith { get; set; }

        public string Gender { get; set; }

        public string PhoneNumber{ get; set; }

        public string Address { get; set; }
        
        public string Country { get; set; }

        public string State { get; set; }

        public string Pincode { get; set; }

        public string employeeCode { get; set; }



    }

   
}
