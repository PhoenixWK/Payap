import LandingPageLayout from "@/app/LandingPageLayout";

export default function SecurityPolicy() {
    return (
        <LandingPageLayout>
            <div className="w-full mx-auto px-5 lg:px-10 pt-[90px] pb-12">
                <h1 className="text-4xl font-bold mb-8">Security Policy</h1>
                <p className="text-sm lg:text-lg text-[#888] dark:text-white mb-8 font-semibold">Last updated: May 23rd 2024</p>
                <p className="text-sm lg:text-lg text-black dark:text-white mb-8">
                    At Payap, we take the security of your data seriously. This Security Policy outlines the measures we implement to protect the confidentiality, integrity, and availability of your personal and financial information. By using Payap, you agree to the practices described in this policy.
                </p>
                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">1. Data encryption</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            All sensitive data, including personal and financial information, is encrypted both in transit and at rest using industry-standard encryption protocols:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>In Transit: We use Transport Layer Security (TLS) to encrypt data exchanged between your device and our servers.</li>
                            <li>At Rest: Data stored on our servers is encrypted using AES-256, ensuring that even if data is compromised, it remains unreadable to unauthorized parties.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">2. Access control</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            We implement strict access control policies to ensure that only authorized personnel can access your data:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Role-Based Access Control (RBAC): Access to data is limited based on job responsibilities. Employees are granted access only to the information necessary to perform their specific roles.</li>
                            <li>Authentication Protocols: We require multi-factor authentication (MFA) for all internal system access, and encourage users to enable MFA for their Payap accounts.</li>
                            <li>Regular Audits: We conduct regular audits to monitor access to systems and data, ensuring that all activities comply with our security policies.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">3. Security monitoring</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            Our systems are monitored 24/7 for suspicious activity and potential security threats:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Intrusion Detection Systems (IDS): We deploy IDS to monitor network traffic and detect suspicious activities that may indicate unauthorized access attempts.</li>
                            <li>Automated Threat Detection: Our systems are equipped with real-time monitoring tools that identify and respond to known and unknown threats, such as malware, phishing attacks, or unauthorized access.</li>
                            <li>Incident Response Plan: In the event of a security breach, our incident response team is trained to act quickly to mitigate risks, contain the breach, and notify affected users.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">4. Data retention and disposal</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            We retain your personal and financial information only for as long as necessary to fulfill the purposes outlined in our Privacy Policy, or as required by law:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Secure Disposal: When data is no longer required, we ensure that it is securely erased or anonymized, making it irretrievable.</li>
                            <li>Regular Reviews: We periodically review data retention practices to ensure compliance with legal and regulatory obligations.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">5. Security training</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            All employees at Payap undergo regular security awareness training:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Cybersecurity Training: Employees are educated on cybersecurity best practices, such as identifying phishing attempts, handling sensitive data, and following secure coding standards.</li>
                            <li>Ongoing Education: We provide continuous education on the latest security threats and mitigation techniques to ensure our team stays informed and prepared.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">6. Vulnerability management</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            We proactively manage and address security vulnerabilities within our systems:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Regular Security Assessments: We conduct regular security assessments, including penetration testing and vulnerability scanning, to identify and address weaknesses.</li>
                            <li>Patch Management: We implement a timely patch management process to ensure that any identified vulnerabilities are promptly addressed.</li>
                            <li>Bug Bounty Program: We may operate a bug bounty program, encouraging external security researchers to responsibly disclose any vulnerabilities they identify.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">7. Third-party security</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            We ensure that all third-party service providers that process or store data on behalf of Payap adhere to our strict security standards:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Due Diligence: We conduct thorough due diligence on third-party providers, ensuring they meet our security requirements before entering into agreements.</li>
                            <li>Contractual Obligations: Third-party providers are contractually obligated to implement and maintain appropriate security measures</li>
                            <li>Continuous Monitoring: We continuously monitor third-party services to ensure ongoing compliance with our security standards.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">8. User responsibilities</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            While we take extensive measures to protect your data, users also play a crucial role in maintaining security:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Account Security: You are responsible for safeguarding your account credentials and enabling multi-factor authentication (MFA) for an added layer of security</li>
                            <li>Device Security: Ensure that your devices are protected by strong passwords, up-to-date antivirus software, and are free from malware.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">9. Reporting security issues</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            If you identify any security vulnerabilities or have concerns about the security of your data, please contact us immediately at:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Email: <span className="text-[#3FA477]">support@payap.com</span></li>
                            <li>Phone: <span className="text-[#3FA477]">+1 (800) 123-4567</span></li>
                        </ul>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            We encourage responsible disclosure and are committed to addressing any issues as quickly as possible.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">10. Updates to this policy</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white leading-relaxed">
                            We may update this Security Policy from time to time to reflect new security practices, threats, or regulatory requirements. Any changes will be posted on this page with the &quot;Effective Date&quot; updated accordingly.
                        </p>
                    </section>
                </div>
            </div>
        </LandingPageLayout>
    );
}
