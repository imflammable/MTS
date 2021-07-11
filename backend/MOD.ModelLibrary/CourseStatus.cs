using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.ModelLibrary
{
    public enum CourseStatus
    {
        Requested = 1,
        Approved,
        Declined,
        PaymentAwaiting,
        PaymentComplete,
        CourseStarted,
        CourseComplete
    }
}
