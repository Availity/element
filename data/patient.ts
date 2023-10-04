export interface Patient {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  patientAccountNumber: string;
  memberId: string;
  familyUnitNumber: string;
  subscriberRelationship: string;
  subscriberRelationshipCode: number;
  gender: string;
  genderCode: string;
  ssn: string;
  birthDate: Date;
  deathDate: Date;
  address: string;
  subscriberMemberId: string;
  payerName: string;
}
