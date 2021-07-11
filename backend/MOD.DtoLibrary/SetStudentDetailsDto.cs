using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class SetStudentDetailsDto
    {
        public string StudentUserId { get; set; }
        public long Phone { get; set; }
        public string Address { get; set; }
        public double UnivMarks { get; set; }
        public double HsMarks { get; set; }
        public double BoardMarks { get; set; }
        public string Skills { get; set; }
    }
}
