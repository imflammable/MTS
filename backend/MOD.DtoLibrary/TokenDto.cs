using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.DtoLibrary
{
    public class TokenDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Token { get; set; }

        public int Role { get; set; }

        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
