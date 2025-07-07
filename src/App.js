import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Profile Photo Placeholder */}
      <div className="profile-photo-placeholder">
        <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Vivek Seemalamudi" className="profile-photo-img" />
      </div>
      {/* Name and LinkedIn */}
      <h1 className="name">Vivek Seemalamudi</h1>
      <a className="linkedin-link" href="https://www.linkedin.com/in/vivek-seemalamudi-a5b34b3/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      {/* Bio */}
      <div className="section-card bio-section">
        <p className="bio">
          A highly accomplished and results-oriented Strategy and Solution Leader, I bring extensive experience across the pharmaceutical, insurance, retail, and financial services industries. I excel at developing and executing innovative technology strategies and end-to-end solution designs, ensuring they deeply align with complex operational and business objectives.<br/><br/>
          My expertise is in architecting future-state enterprise ecosystems, leveraging platforms like Snowflake, AWS, and GCP services. I'm adept at applying advanced Generative AI and Agentic AI techniques for critical analytics and insights, focusing on optimizing data quality and fidelity for diverse research, analytical, and business use cases. I drive digital transformation through cloud adoption (AWS, Azure, GCP), cutting-edge AI/ML capabilities, Low-Code/No-Code solutions, API development, and microservices architectures, strategically applying Gen AI for maximum impact. A strong emphasis is always placed on robust security protocols across all solutions.<br/><br/>
          As a hands-on leader, I'm adept at building, mentoring, and guiding high-performing, cross-functional teams. I consistently consult with senior management on major technology matters, translating complex concepts into clear strategic direction. My strong stakeholder communication skills ensure alignment and buy-in across all levels, while I drive robust architectural governance using tools like BizzDesign to foster innovation, achieve operational excellence, and accelerate time-to-market.
        </p>
      </div>
      <hr className="section-divider" />
      {/* Core Competencies */}
      <div className="section-card core-competencies-section">
        <h2>Core Competencies</h2>
        <div className="competencies-table-wrapper">
          <table className="competencies-table">
            <thead>
              <tr>
                <th>Architecture & Strategy</th>
                <th>Cloud & AI</th>
                <th>Tech & Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enterprise Architecture (TOGAF)</td>
                <td>Cloud Strategy & Migration</td>
                <td>Java, React, Node.js, Kubernetes</td>
              </tr>
              <tr>
                <td>Program Management</td>
                <td>Gen AI / Agentic AI Strategy</td>
                <td>DevSecOps</td>
              </tr>
              <tr>
                <td>Technology and Business Solutions</td>
                <td>Gen AI/ML Analytics</td>
                <td>Snowflake</td>
              </tr>
              <tr>
                <td>Business Process Reinvention</td>
                <td>AWS & Google Cloud</td>
                <td>AWS Bedrock</td>
              </tr>
              <tr>
                <td>Regulatory Assessments</td>
                <td>Google Vertex AI</td>
                <td>UNQORK</td>
              </tr>
              <tr>
                <td>Security Architecture Framework</td>
                <td>Microservices</td>
                <td>APPIAN</td>
              </tr>
              <tr>
                <td></td>
                <td>API Development</td>
                <td>Mulesoft</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Kafka</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>IBM MQ / Message Broker</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="section-divider" />
      {/* Professional Experience */}
      <div className="section-card experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <h3>Director – Technology Strategy & Enterprise Solution Architecture</h3>
            <span className="exp-date">Dec 2021 - Present</span>
            <div className="exp-company">Accenture (Clients: Novo Nordisk, New York Life, Lincoln Financial, Pfizer, L'Oréal)</div>
            <ul>
              <li>Drove the refresh of Enterprise Architecture & Governance for a leading biopharmaceutical organization, establishing a robust framework that strategically aligned IT with critical R&D, manufacturing, and commercial objectives.</li>
              <li>Reinvigorated enterprise architecture and data governance capabilities through the consistent establishment and implementation of architecture principles, standards, data models, and patterns across the enterprise. This included reconstituting the Architecture Review Board (ARB) with new talent and refined processes to enhance oversight of solution designs, technology selections, and strategic architectural alignment. This proactively cultivated scalable, secure, and resilient applications, infrastructure, and data landscapes, effectively eliminating redundancy and fragmentation.</li>
              <li>Spearheaded the development of a comprehensive Business Capability Map deeply integrated with drug discovery workflows, assay development, clinical research, and lab automation processes.</li>
              <li>Drove architectural alignment and improved system interoperability by partnering with IT, engineering, and business leadership, effectively eliminating technical debt to enhance overall efficiency.</li>
              <li>Led the current state assessment and rationalization of complex research technology systems, including sample & inventory management, scientific data management, and bioinformatics platforms, to foster interoperability and efficient data flow.</li>
              <li>Developed technology roadmaps that prioritized innovation and accelerated time-to-market for novel therapies.</li>
              <li>Designed and implemented comprehensive AI Value Strategies, Governance, and cutting-edge solutions for an insurance client, directly aligning AI initiatives with strategic business goals.</li>
              <li>Conducted workshops to document customer journey and identify high-value use cases to significantly improve productivity, enhance customer experience, and optimize risk management within the insurance lifecycle.</li>
              <li>Architected advanced analytics and business intelligence capabilities for information delivery and data exploration, supporting critical functions like underwriting automation, personalized policy recommendations, claims fraud detection, customer churn prediction, and actuarial analysis.</li>
              <li>As part of senior leadership, I was responsible for recruiting, onboarding and mentoring new talent for data science and AI teams and ensured the solutions emphasized Responsible AI principles, robust cybersecurity, and strict adherence to all relevant data privacy and protection regulations, ensuring ethical and compliant deployment of AI/ML and data science platforms, tools, and processes.</li>
              <li>Led large-scale Business Process Optimization initiatives for global Life Sciences organization, directly impacting R&D and supply chain efficiency.</li>
              <li>Re-designed and implemented highly efficient workflows with high attention to details, by strategically articulating processes, leveraging advanced digital solutions and emerging technologies focusing global supply chain management, logistics, inventory optimization, and manufacturing processes.</li>
              <li>I was accountable for end-to-end solution design, ensuring these improvements resulted in continuous refinement, operational excellence, and sustained value realization.</li>
              <li>Identified complex business requirements and guided cross-functional teams through the implementation of these solutions and securing stakeholder buy-in for transformative change.</li>
              <li>Spearheaded major enterprise-level transformations for a large US Insurer, shifting from fragmented IT models to value stream-based architectures to enhance speed and business alignment across the entire insurance value chain. This complex initiative involved championing new ways of working, inspiring cross-functional teams to adopt new processes, and fostering a culture of continuous improvement. My role also integrated Data Strategy principles to ensure informed decision-making and drive cost transformation initiatives, resulting in $10M+ reduction in IT operational costs through strategic technology consolidation and license optimization.</li>
              <li>Established and led Cloud Centers of Excellence (COEs) for a major consumer goods client, defining agile operating models, streamlined processes, and migration factories to accelerate secure, enterprise-wide cloud adoption.</li>
              <li>Conducted in-depth current state assessments and disposition analyses for legacy systems within a complex environment, developing resilient target conceptual architectures, and building compelling business cases that articulated the strategic value of cloud migration.</li>
              <li>Key initiatives include comprehensive end-to-end data migration and integration strategies, implementing robust cutover/rollback protocols to guarantee data fidelity and minimize operational risk.</li>
              <li>Architected the strategic, $150M migration of core claims processing and money movement capabilities for an Insurance carrier from legacy mainframe systems to PEGA Platform, driving significant modernization, process automation, and enhanced agility while ensuring alignment with Reference Architecture.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Principal / Director</h3>
            <span className="exp-date">Jan 2021 - Dec 2021</span>
            <div className="exp-company">Infosys Consulting Inc (Aetna, Novartis)</div>
            <ul>
              <li>Orchestrated the strategic rationalization and consolidation of core systems for a leading healthcare client, significantly reducing redundancy and complexity while building universal capabilities and a resilient architecture.</li>
              <li>Developed roadmaps for successful cloud migration, improving operational efficiency and laying the groundwork for future digital innovation.</li>
              <li>Guided the establishment of a "North Star" Enterprise Architecture vision for the organization, actively refining their operating model, optimizing critical IT and business processes, and enhancing governance to significantly improve Enterprise Architecture engagement and tangible value delivery.</li>
              <li>This also involved managing and governing metadata, including business and technical metadata initiatives, to identify and manage critical data elements for enhanced business and decision impact.</li>
              <li>Designed and Implemented End-to-End Data Migration and Integration Strategies for Life Sciences Modernizations: Developed and executed robust data migration and integration strategies for critical modernizations, implementing robust cutover/rollback protocols to guarantee data fidelity, mitigate operational risk with minimal disruption, and ensure information systems met rigorous quality and operational standards.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Director / Lead Enterprise Architect</h3>
            <span className="exp-date">Jan 2012 - Jan 2021</span>
            <div className="exp-company">Global Information Technology (GIT) (Clients: American century, Brighthouse financials, Univision)</div>
            <ul>
              <li>Founding Member and head of Enterprise Architecture group providing EA consulting with Go-To Market Strategy. Lead Enterprise Architect developing Digital, Cloud & EA strategies, Planning, Adoption and Operating Model, EA Governance and responsible for 40+ EA's, and SA's.</li>
              <li>Directed Enterprise Architecture and Governance for an Asset Management firm, building a foundational EA practice and a Sparx EA architecture repository. Successfully moderated the Architecture Review Board, assessed emerging technologies, and established enterprise-wide architectural principles, standards, and best practices to guide technology direction and ensure robust governance.</li>
              <li>Engineered and led a strategic cloud migration initiative for an insurance client, transforming their business capabilities from legacy infrastructure to a dynamic 90% SaaS and multi-cloud ecosystem. Defined an innovative and scalable architecture, spearheaded technology selection, and crafted strategic roadmaps to ensure a successful transition and achieve key strategic targets.</li>
              <li>Drove the modernization of a leading Media client's New Business Domain through digital platform adoption, employing a Hybrid Cloud strategy. As Solution Architect Lead, initiated the program with a thorough current state assessment, architected a target state leveraging multi-cloud capabilities, and developed actionable migration strategies to AWS. Integrated micro-services architecture patterns to foster innovation and agility within the modernized platform, enabling enhanced business.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Managing Consultant</h3>
            <span className="exp-date">Aug 2006 - Jul 2011</span>
            <div className="exp-company">Deloitte Consulting LLP (Clients: Verizon, Estee Lauder, Walmart, World bank, TIAA)</div>
            <ul>
              <li>Enterprise Architecture: Defined strategies for establishing enterprise architecture teams and governance boards, aligning business priorities with IT capabilities.</li>
              <li>Global Integration: Managed the integration of legacy applications with SAP Finance for a major retail client, developing blueprints and roadmaps for seamless transitions.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Architect</h3>
            <span className="exp-date">Nov 2003 - Aug 2006</span>
            <div className="exp-company">Wipro Technologies (Client: pitney bowes)</div>
            <ul>
              <li>SOA & EAI Solutions: Designed and implemented Service-Oriented Architecture (SOA) and Enterprise Application Integration (EAI) solutions, managing end-to-end SDLC processes.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="section-divider" />
      {/* Contact Section */}
      <div className="section-card contact-section">
        <h2>Contact</h2>
        <div className="contact-details">
          <div><strong>Address:</strong> Houston, TX</div>
          <div><strong>Phone:</strong> <a href="tel:2035836769">203-583-6769</a></div>
          <div><strong>Email:</strong> <a href="mailto:vseemalamudi@gmail.com">vseemalamudi@gmail.com</a></div>
        </div>
        <p style={{marginTop: '16px'}}>Connect with me on <a href="https://www.linkedin.com/in/vivek-seemalamudi-a5b34b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
  );
}

export default App;
