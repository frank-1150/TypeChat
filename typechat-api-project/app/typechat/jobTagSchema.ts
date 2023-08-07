// The following is a schema definition for determining the attributes of a job description.

export interface JobTagResponse {
  usCitizenshipRequired: boolean; // does this job require US citizenships
  remoteWorkingAllowed: boolean | UnknownText; // does this job allow remote working
  minYearsOfExperienceNeeded: number | UnknownText; // what's the minimum years of working experiences needed in this job description
}

// Use this type for order items that match nothing else
export interface UnknownText {
  type: "unknown";
  text: string; // The text that wasn't understood
}
