// Script to generate a clean, valid PDF file containing the authentic resume data
import fs from 'fs';
import path from 'path';

function generateResumePDF(outputPath) {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
4 0 obj
<< /Length 2800 >>
stream
BT
/F1 20 Tf
40 800 Td
(T S Sampath Srinivas Maddi) Tj
/F2 10 Tf
0 -16 Td
(Full-Stack Developer | Software Engineer | AI Engineer) Tj
0 -14 Td
(Email: madditssampathsrinivas@gmail.com | LinkedIn: linkedin.com/in/mtsssrinivas | GitHub: github.com/mtsssrinivas) Tj

0 -24 Td
/F1 12 Tf
(SUMMARY) Tj
/F2 9 Tf
0 -14 Td
(Computer Science undergraduate with hands-on experience developing full-stack SaaS applications using React.js,) Tj
0 -11 Td
(Node.js, Express.js, MongoDB, PostgreSQL, Apache Kafka, Redis, and AI-powered products.) Tj

0 -20 Td
/F1 12 Tf
(EDUCATION) Tj
/F1 10 Tf
0 -14 Td
(Vellore Institute of Technology - AP) Tj
/F2 9 Tf
0 -12 Td
(Bachelor of Technology in Computer Science and Engineering | Sep 2023 - May 2027 | CGPA: 8.91 / 10) Tj
0 -11 Td
(Relevant Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, System Design) Tj

0 -20 Td
/F1 12 Tf
(EXPERIENCE) Tj
/F1 10 Tf
0 -14 Td
(Software Developer Intern - VSRI) Tj
/F2 9 Tf
0 -12 Td
(June 2026 - Present) Tj
0 -12 Td
(- Developing full-stack web applications using React.js, Node.js, Express.js, JavaScript, and MySQL.) Tj
0 -11 Td
(- Designing RESTful APIs, integrating relational database schemas, and building reusable frontend components.) Tj
0 -11 Td
(- Collaborating in cross-functional Agile/Scrum sprints with Git version control and end-to-end testing.) Tj

0 -20 Td
/F1 12 Tf
(PROJECTS) Tj
/F1 10 Tf
0 -14 Td
(FraudShield - Real-Time Fraud Detection & Digital Banking Platform) Tj
/F2 9 Tf
0 -12 Td
(Tech: TypeScript, Node.js, Express.js, Apache Kafka, PostgreSQL 16, Redis 7, React 18, Docker) Tj
0 -11 Td
(- Architected 8 decoupled microservices communicating across 7 partitioned Kafka event streams.) Tj
0 -11 Td
(- Implemented Distributed Saga choreography with automatic compensation rollback and Transactional Outbox consistency.) Tj
0 -11 Td
(- Built 6-Link Chain of Responsibility fraud engine with Redis sliding-window velocity and PostgreSQL row-level locks.) Tj

/F1 10 Tf
0 -16 Td
(InterviewIQ - AI-Powered Mock Interview Platform) Tj
/F2 9 Tf
0 -12 Td
(Tech: React.js, Node.js, Express.js, MongoDB Atlas, Firebase, OpenRouter API, Razorpay) Tj
0 -11 Td
(- Developed resume parsing pipeline, AI interview question generation, grading feedback, and 10+ RESTful APIs.) Tj

/F1 10 Tf
0 -16 Td
(Nestora - Full-Stack Rental Marketplace) Tj
/F2 9 Tf
0 -12 Td
(Tech: React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, Tailwind CSS) Tj
0 -11 Td
(- Built rental listings, booking reservation workflow, verified reviews, wishlists, and 12+ RESTful APIs.) Tj

0 -20 Td
/F1 12 Tf
(TECHNICAL SKILLS) Tj
/F2 9 Tf
0 -14 Td
(Languages: Java, Python, JavaScript, TypeScript, SQL) Tj
0 -11 Td
(Frontend & Backend: React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, RESTful APIs) Tj
0 -11 Td
(Databases & Cache: PostgreSQL, MongoDB, MySQL, Redis) Tj
0 -11 Td
(AI & Tools: OpenAI API, LLMs, Prompt Engineering, Docker, AWS, Git, GitHub, Postman, Prisma ORM, Firebase) Tj

0 -20 Td
/F1 12 Tf
(CERTIFICATIONS) Tj
/F2 9 Tf
0 -14 Td
(- AWS Academy Graduate - Cloud Architecting | Amazon Web Services) Tj
0 -11 Td
(- AWS Academy Graduate - Cloud Foundations | Amazon Web Services) Tj
0 -11 Td
(- The Ultimate 2026 Full-Stack Web Development Bootcamp) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000305 00000 n 
0000000212 00000 n 
0000000259 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
3160
%%EOF
`;

  fs.writeFileSync(outputPath, content);
  console.log('Successfully generated valid PDF to:', outputPath);
}

const targetPath = path.resolve('public', 'resume.pdf');
generateResumePDF(targetPath);
