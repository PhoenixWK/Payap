import LandingPageLayout from "@/app/LandingPageLayout";

export default function PrivacyPolicy() {
    return (
        <LandingPageLayout>
            <div className="w-full mx-auto px-5 lg:px-10 pt-[100px] pb-12">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm lg:text-lg text-[#888] dark:text-white mb-8 font-semibold">Last updated: May 23rd 2024</p>
                <p className="text-sm lg:text-lg text-black dark:text-white mb-8">
                This Privacy Policy outlines how Payap ("we", "our", "us") collects, uses, and protects your personal information when you use our financial management system. By using Payap, you agree to the practices described in this policy.
                </p>
                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">1. Information we collect</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            We collect personal information that you voluntarily provide to us when you use Payap, including:
                            Personal Identification Information: Name, email address, phone number, billing address.
                            Financial Information: Bank account details, credit/debit card information, transaction history.
                            Usage Data: Information about how you interact with our app, such as device type, IP address, browser type, and system logs.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">2. How we use your information</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            We use the information collected for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>To provide services, facilitate financial transactions</li>
                            <li>To improve our services and user experience</li>
                            <li>To communicate with you about features, updates</li>
                            <li>To prevent fraud and maintain data integrity</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">3. Sharing of information</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Third-Party Service Providers: To facilitate payments, data storage, and analytics services.</li>
                            <li>Legal Compliance: When required by law, regulation, or legal process.</li>
                            <li>Business Transfers: In the event of a merger, acquisition, or sale of assets.</li>
                            <li>To prevent fraud and maintain data integrity</li>
                        </ul>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            We do not sell, rent, or trade your personal information with third parties for marketing purposes.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">4. Data security</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            We take the security of your data seriously. We use encryption, firewalls, and secure servers to protect your information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or method of electronic storage is completely secure.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">5. Your data rights</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            You have the right:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <li>Access: Request a copy of your personal information.</li>
                            <li>Correct: Update or correct inaccurate information.</li>
                            <li>Delete: Request the deletion of your personal information, subject to legal retention requirements.</li>
                            <li>Restrict: Limit the processing of your personal information in certain cases</li>
                        </ul>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            To exercise any of these rights, please contact us at <span className="text-[#3FA477]">contact@payap.com</span>
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">6. Third-party links</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            Payap may contain links to third-party websites or services. We are not responsible for the privacy practices of these third-party sites. Please review their privacy policies separately.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">7. Changes to this privacy policy</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            We may update this Privacy Policy from time to time to reflect changes in our practices. Any changes will be posted on this page with the "Effective Date" updated accordingly.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3">8. Contact us</h2>
                        <p className="text-gray-700 text-sm lg:text-lg dark:text-white">
                            If you have any questions about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="mt-2 text-gray-700 text-sm lg:text-lg dark:text-white">
                            <p>Email: <span className="text-[#3FA477]">support@payap.com</span></p>
                            <p>Phone: <span className="text-[#3FA477]">+1 (800) 123-4567</span></p>
                            <p>Address: <span className="text-[#3FA477]">123 Privacy Ave, Suite 100, New York, NY 10001, USA</span></p>
                        </div>
                    </section>
                </div>
            </div>
        </LandingPageLayout>
    );
}
