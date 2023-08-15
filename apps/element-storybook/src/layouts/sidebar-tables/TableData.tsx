export interface Data {
  id: string;
  payer: string;
  patientname: string;
  accountid: string;
  attachments?: object[];
  status: string;
}

function createRowData(
  id = 'SAMPLE123456789',
  payer = 'Payer1',
  patientname = 'firstname lastname',
  accountid = '123456789',
  attachments = [] as Data['attachments'],
  status = 'Pending'
): Data {
  return {
    id,
    payer,
    patientname,
    accountid,
    attachments,
    status,
  };
}

let d;

export const datarows = [
  createRowData(),
  createRowData('SAMPLE111111111', d, 'Mary Appleseed', '111111111', [{ title: 'attachment1' }], d),
  createRowData('EXAMPLE12345678', 'Payer2', d, d, d, 'Needs Info'),
  createRowData('SAMPLE000000001', 'Payer3'),
  createRowData('ANOTHERSAMPLE12', d, d, d, [{ title: 'attachment1' }, { title: 'attachment2' }], 'Denied'),
  createRowData('SAMPLE222222222'),
];
