// for storing data to be gotten from from api endpoints

const WelcomeData = {
  firstName: 'Aderibigbe',
  category: 'subject',
  numberOfCategory: '12',
}

const ClassCardData = [
  { class: 'Primary 1', noOfSubject: '1247' },
  { class: 'Primary 1', noOfSubject: '1247' },
  { class: 'Primary 1', noOfSubject: '1247' },
  { class: 'Primary 1', noOfSubject: '1247' },
  { class: 'Primary 1', noOfSubject: '1247' },
  { class: 'Primary 1', noOfSubject: '1247' },
]

const SubjectData = [
  { subject: 'Mathematics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Home Economics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Basic Science', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Basic Science', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Computer Science', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Mathematics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Mathematics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Home Economics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Mathematics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Mathematics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Home Economics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
  { subject: 'Mathematics', noOfTopics: '12 Topics', noOfLessons: '32 Lessons' },
]

const StudentData = [
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Ahmed Jolaiya', gender: 'Male', questionsAnswered: '7 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'David Alaba', gender: 'Male', questionsAnswered: '20 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
  { name: 'Bolaji Jolaiya', gender: 'Female', questionsAnswered: '5 of 25' },
]

const columns = [
  {
    label: 'Name',
    key: 'name',
    sort: true,
    minWidth: 350,
  },
  {
    label: 'Gender',
    key: 'gender',
    sort: true,
    minWidth: 50,
    // align: 'center',
  },
  {
    label: 'Questions Answered',
    key: 'questionsAnswered',
    sort: true,
    minWidth: 30,
    align: 'right',
  },
]

const LessonDatas = [
  { id: '1', type: 'PDF', topic: 'Operation with logarithm and standard forms' },
  { id: '2', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '3', type: 'Video', topic: 'Operation with logarithm' },
  { id: '4', type: 'Quiz', topic: 'Operation with logarithm' },
  { id: '5', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '6', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '7', type: 'Video', topic: 'Operation with logarithm' },
  { id: '8', type: 'Assignment', topic: 'Operation with logarithm and standard forms' },
  { id: '9', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '10', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '11', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '12', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '13', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '14', type: 'PDF', topic: 'Operation with logarithm' },
]

const LessonTileDatas = [
  { id: '1', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '2', type: 'Quiz', topic: 'Operation with logarithm' },
  { id: '3', type: 'Video', topic: 'Operation with logarithm' },
  { id: '4', type: 'PDF', topic: 'Algebra' },
  { id: '5', type: 'Audio', topic: 'Operation with logarithm' },
  { id: '6', type: 'Quiz', topic: 'Operation with logarithm' },
  { id: '7', type: 'PDF', topic: 'Operation with logarithm' },
  { id: '8', type: 'Assessement', topic: 'Algebra' },
  { id: '9', type: 'Video', topic: 'Algebra' },
]

const descriptionDatas = [{ authorName: 'Ezinne Ozukalu', noOfTopic: '12', noOfLesson: '60', noOfContent: '186' }]

const subjectCardData = [
  {
    name: 'Probability',
    count: 32,
    type: 'Beginner',
  },
  {
    name: 'Statistics',
    count: 3,
    type: 'Beginner',
  },
  {
    name: 'Percentage',
    count: 42,
    type: 'Intermediate',
  },
  {
    name: 'Algebra',
    count: 62,
    type: 'Beginner',
  },
  {
    name: 'Fraction',
    count: 62,
    type: 'Beginner',
  },
  {
    name: 'Place Value',
    count: 62,
    type: 'Beginner',
  },
  {
    name: 'Place Value',
    count: 62,
    type: 'Advance',
  },
  {
    name: 'Place Value',
    count: 62,
    type: 'Advance',
  },
]

const TopicData = {
  noOfStudents: 50,
  noOfLessons: 60,
  topicTitle: 'Percentage',
  topicDescription: `mathematics is an area of knowledge that includes such topics as numbers, formulas and related structures, shapes and the spaces in which they
  are contained, and quantities and their changes. Most mathematical activity involves the use of pure reason to discover or prove the
  properties of abstract objects, which consist of either abstractions from nature or—in modern mathematics—entities that are stipulated with
  certain properties, called axioms. A mathematical proof consists of a succession of applications of some deductive rules to already known
  results, including previously proved theorems, axioms and (in case of abstraction from nature) some basic properties that are considered as
  true starting points of the theory under consideration.`,
  lessonCardData: [
    { lessonTitle: 'Fraction 1', noOfContents: 12 },
    { lessonTitle: 'Percentage 1', noOfContents: 1 },
    { lessonTitle: 'Fraction 1', noOfContents: 12 },
    { lessonTitle: 'Percentage 1', noOfContents: 1 },
    { lessonTitle: 'Fraction 1', noOfContents: 12 },
    { lessonTitle: 'Percentage 1', noOfContents: 1 },
    { lessonTitle: 'Fraction 1', noOfContents: 12 },
    { lessonTitle: 'Percentage 1', noOfContents: 1 },
    { lessonTitle: 'Fraction 1', noOfContents: 12 },
    { lessonTitle: 'Percentage 1', noOfContents: 1 },
  ],
}

const Quizzes = ['Quiz 1', 'Quiz 2', 'Quiz 3']

const Questions = [
  {
    id: 'q-1',
    isRadio: true,
    options: [
      { label: 'a10 b20', value: '1' },
      { label: 'b10 b20', value: '2' },
      { label: 'c10 c20', value: '3' },
      { label: 'd10 d20', value: '4' },
    ],
    name: 'Question 1',
    title: 'The product of a²b4 and a³b5 is',
  },
  {
    id: 'q-2',
    options: [
      { label: 'e10 e20', value: '1' },
      { label: 'f10 f20', value: '2' },
      { label: 'g10 g20', value: '3' },
      { label: 'h10 h20', value: '4' },
    ],
    isRadio: true,
    name: 'Question 2',
    title: 'The product of a²b4 and a³b5 is',
  },
  {
    id: 'q-3',
    options: [
      { label: 'i10 i20', value: '1' },
      { label: 'j10 j20', value: '2' },
      { label: 'k10 k20', value: '3' },
      { label: 'l10 l20', value: '4' },
    ],
    isRadio: false,
    name: 'Question 3',
    title: 'The product of a²b4 and a³b5 is',
  },
]

const AdminData = [
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'ACTIVE',
    key: 'Activated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Memphis Depay',
    role: 'System Admin',
    email: 'memphis.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'ACTIVE',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'ACTIVE',
  },
  {
    name: 'Raheem Sterling',
    role: 'Super Admin',
    email: 'sterling.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
  {
    name: 'Jibril Abdulkabir',
    role: 'Content Admin',
    email: 'jolaiya.international@school.com',
    lastActive: '09/02/2022',
    status: 'Deactivated',
  },
]

const AdminColumns = [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Role',
    key: 'role',
  },
  {
    label: 'Email',
    key: 'email',
  },
  {
    label: 'Last Active',
    key: 'lastActive',
  },
  {
    label: 'Status',
    key: 'status',
    align: 'right',
  },
]

const filters = [
  {
    label: 'Status',
    options: [
      { id: 'ACTIVE', value: 'Active' },
      { id: 'DEACTIVATED', value: 'Deactivated' },
    ],
    backgroundColor: true,
  },
]

export {
  WelcomeData,
  ClassCardData,
  SubjectData,
  subjectCardData,
  TopicData,
  Quizzes,
  StudentData,
  columns,
  LessonDatas,
  Questions,
  AdminData,
  LessonTileDatas,
  AdminColumns,
  filters,
  descriptionDatas,
}
