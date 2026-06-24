import ServicePageLayout from "./servicesPageLayout";

const integrity =
  "AICTS provides advisory, readiness and documentation support. Outcomes such as credit issuance, certification, finance, buyer participation or offtake depend on applicable standards, regulation, registry processes, project performance, validation, verification and market conditions.";

const MRVSafeguards = () => (
  <ServicePageLayout
    who="Carbon projects, renewable energy producers, NGOs, project developers, public institutions, development partners, community programmes, investors and ESG teams requiring credible evidence and stakeholder processes."
    how="AICTS supports clients to design and maintain evidence systems, stakeholder processes and safeguards needed for credible climate action. We help projects become technically sound, socially credible and better prepared for verification, reporting or finance engagement."
    delivers={[
      "MRV system design",
      "Monitoring plans and indicators",
      "Data collection templates",
      "Baseline data management",
      "Evidence file development",
      "Emissions reduction tracking",
      "Stakeholder mapping",
      "Community consultations",
      "FPIC support where required",
      "Safeguards advisory",
      "Grievance mechanism design",
      "Community benefit documentation",
      "Verification-readiness support",
      "Monitoring report support",
    ]}
    outputs={[
      "MRV frameworks",
      "Monitoring plans",
      "Data collection tools",
      "Baseline records",
      "Stakeholder maps",
      "Consultation reports",
      "Safeguards notes",
      "Grievance procedure outlines",
      "Evidence files",
      "Verification-readiness checklists",
    ]}
    integrityNote={integrity}
    finalCta={{
      heading: "Take the next credible step",
      copy: "Share your project, policy, institutional or market-readiness question with AICTS and we will help identify a practical way forward.",
      button: "Design an MRV Framework",
      to: "/start-a-diagnostic",
    }}
  />
);

export default MRVSafeguards;
