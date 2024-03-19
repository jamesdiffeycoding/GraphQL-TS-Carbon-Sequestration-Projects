const company = [
  { id: '1', title: 'Amazon', disclosure: ['Scope 1', 'Scope 2'] },
  { id: '2', title: 'Apple', disclosure: ['Scope 2', 'Scope 3'] },
  { id: '3', title: 'Google', disclosure: ['Scope 1', 'Scope 3'] },
  { id: '4', title: 'Microsoft', disclosure: ['Scope 1', 'Scope 2', 'Scope 3'] },
  { id: '5', title: 'Tesla', disclosure: ['Scope 2'] },
];

const agency = [
  { id: '1', name: 'PWC', metricspublicallyavailable: true },
  { id: '2', name: 'Urgentem', metricspublicallyavailable: false },
  { id: '3', name: 'KPMG', metricspublicallyavailable: true },
];

const score = [
  { id: '1', rating: 9, date: "01.03.2024", content: 'Apple has shown strong commitment to emissions reporting with detailed disclosures on Scope 2 and Scope 3 emissions.', agency_id: '1', company_id: '2' },
  { id: '2', rating: 10, date: "04.03.2024", content: 'Amazon has demonstrated excellent transparency in emissions reporting, especially regarding Scope 1 and Scope 2 emissions.', agency_id: '2', company_id: '1' },
  { id: '3', rating: 7,  date: "03.03.2024",content: 'Google\'s emissions reporting focuses on Scope 1 and Scope 3 emissions, showcasing efforts towards sustainability.', agency_id: '3', company_id: '3' },
  { id: '4', rating: 5,  date: "02.03.2024", content: 'Microsoft\'s emissions disclosure performance covers Scope 1, Scope 2, and Scope 3 emissions comprehensively, reflecting a strong commitment to sustainability.', agency_id: '2', company_id: '4' },
  { id: '5', rating: 8,  date: "04.03.2024",content: 'Tesla emphasizes reporting on Scope 2 emissions, highlighting a dedication to environmental impact reduction.', agency_id: '2', company_id: '5' },
  { id: '6', rating: 7,  date: "03.03.2024",content: 'Apple has shown consistent efforts in emissions reporting, particularly in disclosing Scope 2 and Scope 3 emissions.', agency_id: '1', company_id: '2' },
  { id: '7', rating: 10,  date: "01.03.2024",content: 'Google\'s emissions reporting performance is commendable, focusing on Scope 1 and Scope 3 emissions transparency.', agency_id: '3', company_id: '1' },
];

export default { company, agency, score };