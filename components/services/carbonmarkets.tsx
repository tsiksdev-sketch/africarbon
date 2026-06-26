import ServicePageLayout from "./servicesPageLayout";

const integrity =
  "AICTS provides advisory, readiness and documentation support. Outcomes such as credit issuance, certification, finance, buyer participation or offtake depend on applicable standards, regulation, registry processes, project performance, validation, verification and market conditions.";

const CarbonMarkets = () => (
  <ServicePageLayout
   
    who="Project owners, renewable energy developers, NGOs, municipalities, investors, community programmes, forestry and restoration initiatives, water and sanitation programmes, waste projects, mining and industrial transition projects, and development partners."
    how="We help clients understand whether a project has a credible carbon pathway, which methodologies or standards may be relevant, what data is required, what risks must be managed and what steps are needed before registration, validation or verification processes can be pursued."
    delivers={[
      "Carbon opportunity screening",
      "Project eligibility assessment",
      "Pre-feasibility and feasibility studies",
      "Methodology and standards mapping",
      "Baseline assessment and emissions reduction estimation",
      "Project boundary definition",
      "Prior consideration support where applicable",
      "PIN and PDD preparation support",
      "Stakeholder engagement planning",
      "MRV framework development",
      "Validation and verification readiness",
      "Registry-readiness support",
      "Buyer-readiness and offtake facilitation support",
    ]}
    outputs={[
      "Carbon opportunity assessment reports",
      "Feasibility and pre-feasibility reports",
      "Baseline assessment notes",
      "Methodology mapping matrices",
      "PIN/PDD drafting support",
      "MRV plans and monitoring templates",
      "Stakeholder engagement records",
      "Carbon revenue scenario notes",
      "Risk and readiness assessments",
    ]}
    integrityNote={integrity}
    finalCta={{
      heading: "Take the next credible step",
      copy: "Share your project, policy, institutional or market-readiness question with AICTS and we will help identify a practical way forward.",
      button: "Start with a Carbon Opportunity Diagnostic",
      to: "/start-a-diagnostic",
    }}
  />
);

export default CarbonMarkets;
