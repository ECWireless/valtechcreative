import styled, { css } from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import Fade from 'react-reveal/Fade'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from '../components/theme'
import { Box } from '../components/Boxes'
import { Button } from '../components/Buttons'
import { Container, Flex } from '../components/Containers'
import { H1, H2, H3, P2, P3 } from '../components/Typography'

const termsOfUse = () => {
    return (
        <>
            <Head>
                <title>Terms of Use | Valtech Creative</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web Development for custom Websites, Web Apps, and Native Applications. Valtech is a distributed company built around collaboration." 
                />
                <meta name="keywords" content="web development, website, web app, native application, custom, boutique, distributed, collaborative" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://valtechcreative.com/" />

                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <Container>
                    <Box marginTop={50}>
                        <Flex align={'center'} justify={'center'}>
                            <Link href='/#subscriptions'>
                                <Button>Back to Subscriptions</Button>
                            </Link>
                        </Flex>
                    </Box>
                    <Box marginTop={75}>
                        <H1>Valtech Creative Terms of Use</H1>
                        <Box marginTop={25}>
                            <P3>Last Updated: 10.06.20</P3>
                        </Box>
                    </Box>

                    <Box marginTop={75}>
                        <H2>1. Introduction</H2>
                        <Box marginTop={25}>
                            <P2>1.1. Legal Agreement</P2>
                        </Box>
                    </Box>
                    <Box marginTop={25}>
                        <P3>These Valtech Creative Terms of Use (“Terms of Use”), set forth the entire terms and conditions applicable to each visitor or user (“User” or “you”) of the Valtech Creative Website Subscription.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>The Valtech Creative Terms constitute a binding and enforceable legal contract between Elliott Conway (branded as “Valtech Creative”) and you in relation to the use of any Valtech Creative Services - so please read them carefully.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>You may subscribe to the Valtech Creative Website Subscription only if you fully agree to the Valtech Creative Terms. If you do not read, fully understand and agree to the Valtech Creative Terms, you must not subscribe to service, or if already subscribed, must immediately cancel subscription.</P3>
                    </Box>

                    <Box marginTop={75}>
                        <H2>2. Subscription Scope of Work</H2>
                        <Box marginTop={25}>
                            <P2>2.1 Personal Website Subscription</P2>
                        </Box>
                    </Box>
                    <ol>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>The Personal Website Subscription is only available for individuals who are using the site for non-commercial purposes, or who are using it for commercial purposes as a sole-proprietorship. Any other type of entity signing up for this subscription will be liable to immediate termination of services and cancellation (as outlined in section 6.2 and 6.3).</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>The cost of this subscription is $20/month (not including taxes), which will be billed within 24 hours after the website is deemed complete by both the Web Developer and the User, and will be due 30 days after billing date.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Before the subscription is billed, a one-time payment of $50 per page created will be charged to the User (e.g. a website with a Home, About, and Services page will require a one-time payment of $150). This charge will not be a part of the monthly recurring payment.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Services included as part of the Personal Website Subscription are: 1) Covered monthly hosting costs of website backend and CMS, 2) covered monthly hosting costs for website frontend, 3) 10 hours-worth of changes to any pages that already exist on the site (as changes are outlined in 2.3), 4) free technical maintenance, 5) 24/7 customer support, 6) and a rate of $50 per page for any additional pages requested after subscription has officially begun.</LI>
                        </Box>
                    </ol>
                    <Box marginTop={75}>
                        <P2>2.2 Business Website Subscription</P2>
                    </Box>
                    <ol>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>The Business Website Subscription is available for organizations that are not considered sole-proprietorships.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>The cost of this subscription is $30/month (not including taxes), which will be billed within 24 hours after the website is deemed complete by both the Web Developer and the User, and will be due 30 days after billing date.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Before the subscription is billed, a one-time payment of $100 per page created will be charged to the User (e.g. a website with a Home, About, and Services page will require a one-time payment of $300). This charge will not be a part of the monthly recurring payment.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Services included as part of the Business Website Subscription are: 1) Covered monthly hosting costs of website backend and CMS, 2) covered monthly hosting costs for website frontend, 3) 20 hours-worth of changes to any pages that already exist on the site (as changes are outlined in 2.3), 4) free technical maintenance, 5) 24/7 customer support, 6) and a rate of $100 per page for any additional pages requested after subscription has officially begun.</LI>
                        </Box>
                    </ol>
                    <Box marginTop={75}>
                        <P2>2.3 Free Changes Made to Existing Pages</P2>
                    </Box>
                    <ol>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Allowable changes include, but are not limited to: 1) branding, 2) page structure, 3) content, 4) backend custom fields, 5) forms, 6) third-party plugins, and 7) any form of tagging for Google Analytics, Google Search, or similar services.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Changes not allowed include, but are not limited to: 1) Brand-new features that do not appear anywhere else on the website, 2) custom plugins that must be built from scratch, 3) custom interactivity that does commonly appear on websites, 4) backend capabilities that were not already provided before the subscription began.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Whether or not a change falls under one of these particular categories is up to the sole discretion of Valtech Creative.</LI>
                        </Box>
                    </ol>

                    <Box marginTop={75}>
                        <H2>3. Your Obligations</H2>
                        <Box marginTop={25}>
                            <P2>3.1. You represent and warrant that:</P2>
                        </Box>
                    </Box>
                    <ol>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>you are at least thirteen (13) years of age, or sixteen (16) years of age if you are an individual within the European Union (EU), or of the legal age of majority in your jurisdiction, and possess the legal authority, right and freedom to enter into the Valtech Creative Terms and to form a binding agreement, for yourself or on behalf of the person or entity committed by you to the Valtech Creative Terms;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>your country of residence and/or your company’s country of incorporation is the same as the country specified in the contact and/or billing address you provide us;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>you understand that Valtech Creative does not provide any legal advice or any recommendation with respect to any laws or requirements applicable to your use or any of your End Users, or your compliance therewith; And specifically regarding your User Content:</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>you confirm you own all rights in and to any content uploaded or provided by you, or imported, copied or uploaded by Valtech Creative Services for you, to your User Platform (“User Content”), including any designs, images, animations, videos, audio files, fonts, logos, code, illustrations, compositions, artworks, interfaces, usernames, information you provide for the purpose of creating a subdomain name, text, literary works and any other materials (“Content”), or otherwise have (and will continue to have) the full power, title, licenses, consents and authority, in and to the User Content, as necessary to legally access to, import, copy, use, publish, transfer or license such User Content, by you and us or any of our affiliates;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>you have (and will maintain) the full power, title, licenses, consents and authority to allow Valtech Creative Services to access any websites, web pages and/or other online services, for the purpose of importing, copying, displaying, uploading, transmitting and/or otherwise using, your User Content.</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>the User Content is (and will continue to be) true, current, accurate, non-infringing upon any third party rights, and in no way unlawful for you to upload, import, copy, possess, post, transmit, display or otherwise use, in the country in which you or your User Platform’s visitors and users (“End Users”) reside, or for Valtech Creative and/or your End Users to access, import, copy, upload, use or possess in connection with the Valtech Creative Services;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>you have obtained all consents and permissions required under all applicable laws, regarding the posting, transmission and publication of any personal information and/or image or likeness of any person, entity or property which is part of the User Content, and you will adhere to all laws applicable thereto.</LI>
                        </Box>
                    </ol>
                    <Box marginTop={75}>
                        <P2>3.2. You undertake and agree to:</P2>
                    </Box>
                    <ol>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>fully comply with all applicable laws and any other contractual terms which govern your use of the Valtech Creative Services (and any related interaction or transaction), including those specific laws applicable to you or your End Users in any of your geographical locations;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>be solely responsible and liable with respect to any of the uses of the Valtech Creative Services which occur under your User Account and/or User Platform(s), and for any of your User Content (including for any consequences of accessing, importing, uploading, copying, using or publishing such User Content on or with respect to the Valtech Creative Services);</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>regularly and independently save and backup any of your User Content and the information that is being processed by you regarding your User Platform, including with respect to End Users, User Products, and any applications and/or Third Party Services used by you;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>receive from time to time promotional messages and materials from Valtech Creative, by email. If you wish not to receive such promotional materials or notices – please just notify us at any time;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>allow Valtech Creative to use in perpetuity, worldwide and free of charge, any version of your User Platform (or any part thereof) for any of Valtech Craetive’s marketing and promotional activities, online and/or offline, and modify it as reasonably required for such purposes, and you waive any claims against Valtech Creative or anyone on its behalf relating to any past, present or future moral rights, artists’ rights, or any other similar rights worldwide that you may have in or to your User Platform with respect to such limited permitted uses;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Valtech Creative’s sole discretion as to the means, manner, and method for performing the Valtech Creative Services, including those regarding the hosting, transmission, publication and/or display of any User Platforms and/or Content (including the inclusion and presentation of any advertisements or other commercial content with respect thereto).</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>Valtech Creative shall have the right to offer the Valtech Creative Services in alternative price plans and impose different restrictions as for the upload, storage, download and use of the Valtech Creative Services in each price plan, including, without limitation, restrictions on network traffic and bandwidth, size and/or length of Content, quality and/or format of Content, sources of Content, volume of download time, number of subscribers to your Content, etc.</LI>
                        </Box>
                    </ol>
                    <Box marginTop={75}>
                        <P2>3.3. You agree and undertake not to:</P2>
                    </Box>
                    <ol>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>copy, modify, create derivative works of, download, adapt, reverse engineer, emulate, migrate to another service, translate, compile, decompile or disassemble the Valtech Creative Website for use and display within User Platforms (“Licensed Content”) and/or any part thereof in any way, or publicly display, perform, transmit or distribute any of the foregoing without Valtech Creative’s prior written and specific consent and/or as expressly permitted under the Valtech Creative Terms;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>submit, transmit or display any User Content, or use Licensed Content in a context, which may be deemed as defamatory, libelous, obscene, harassing, threatening, incendiary, abusive, racist, offensive, deceptive or fraudulent, encouraging criminal or harmful conduct, or which otherwise violates the rights of Valtech Creative, or otherwise shows any person, entity or brand in a bad or disparaging light, without their prior explicit approval;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>use any illegal action to collect login data and/or passwords for other websites, third parties, software or services;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>phish, collect, upload, or otherwise make available credit card information or other forms of financial data used for collecting payments, unless done in accordance with any applicable law, including, with the PCI DSS standard when applicable;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>upload, insert, collect or otherwise make available within the Valtech Creative Website, any malicious, unlawful, defamatory or obscene Content;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>use any “robot”, “spider” or other automatic device, program, script, algorithm, or methodology, or any similar or equivalent manual process, to access, acquire, copy, or monitor any portion of the Valtech Creative Services (or its data and/or Content), or in any way reproduce or circumvent the navigational structure or presentation of any of the Valtech Creative Services to obtain or attempt to obtain any materials, documents, services or information through any means not purposely made available through the Valtech Creative Services;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>act in a manner which might be perceived as damaging to Valtech Creative’s reputation and goodwill or which may bring Valtech Creative into disrepute or harm;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>impersonate any person or entity or provide false information on the Valtech Creative Services and/or User Platform, whether directly or indirectly, or otherwise perform any manipulation in order to disguise your identity or the origin of any message or transmittal you send to Valtech Creative and/or any End Users;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>falsely state or otherwise misrepresent your affiliation with any person or entity, or falsely express or imply that Valtech Creative or any third party endorses you, your User Platform, your business, your User Products, or any statement you make;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>reverse look-up, trace, or seek to trace another User of Valtech Creative Services, or otherwise interfere with or violate any other User’s right to privacy or other rights, or harvest or collect personally identifiable information about visitors or users of the Valtech Creative Services and/or User Platform without their express and informed consent;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>upload to the Valtech Creative Services and/or User Platform or otherwise use them to design, develop, distribute and/or otherwise transmit or execute, any virus, worm, Trojan Horse, time bomb, web bug, spyware, malware, or any other computer code, file, or program that may or is intended to damage or hijack the operation of any hardware, software, or telecommunications equipment, or any other actually or potentially harmful, disruptive, or invasive code or component;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Valtech Creative Services or Valtech Creative’s systems or networks connected to the Valtech Creative Services, or otherwise interfere with or disrupt the operation of any of the Valtech Creative Services, or the servers or networks that host them or make them available, or disobey any requirements, procedures, policies, or regulations of such servers or networks;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>use any of the Valtech Creative Services and/or User Platform in connection with any form of spam, unsolicited mail, fraud, scam, phishing, “chain letters”, “pyramid schemes” or similar conduct, or otherwise engage in unethical marketing or advertising;</LI>
                        </Box>
                        <Box marginTop={25} marginLeft={50}>
                            <LI>violate, attempt to violate, or otherwise fail to comply with any of the Valtech Creative Terms or any laws or requirements applicable to your use of the Valtech Creative Services.</LI>
                        </Box>
                    </ol>

                    <Box marginTop={25}>
                        <P3>You acknowledge and agree that your failure to abide by any of the foregoing or any misrepresentation made by you herein may result in the immediate termination of your Subscription and/or any Services provided to you – with or without further notice to you, and without any refund of amounts paid on account of any such Services.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <H2>4. Content and Ownership</H2>
                        <Box marginTop={25}>
                            <P2>4.1. Your Intellectual Property</P2>
                        </Box>
                    </Box>
                    <Box marginTop={25}>
                        <P3>As between Valtech Creative and you, you shall own all intellectual property pertaining to your User Content and to any other materials created by you, including to any designs, images, animations, videos, audio files, fonts, logos, illustrations, compositions, artworks, code, interfaces, text and literary works. Valtech Creative does not claim ownership rights on your content. For the sole purpose of granting you the service, You know and agree that we will need to access, upload and/or copy your User Content to our platform, including cloud services and CDN’s, to make display adjustments, to duplicate for backup and perform any other technical actions and/or uses required to perform our services, as we deem fit.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>4.2. Valtech Creative’s Intellectual Property</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>All rights, title and interest in and to the Valtech Creative Services, including any and all copyrightable materials or any other content thereof which is or may be subject to any intellectual property rights under any applicable law (including any artwork, graphics, images, website templates and widgets, literary work, source and object code, computer code (including html), applications, audio, music, video and other media, designs, animations, interfaces, documentation, derivatives and versions thereof, the “look and feel” of the Valtech Creative Services, methods, products, algorithms, data, interactive features and objects, advertising and acquisition tools and methods, inventions, trade secrets, logos, domains, customized URLs, trademarks, service marks, trade names and other proprietary identifiers, whether or not registered and/or capable of being registered (collectively, “Intellectual Property”), and any derivations thereof, are owned by and/or licensed to Valtech Creative.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <H2>5. Service Fees</H2>
                        <Box marginTop={25}>
                            <P2>5.1. Paid Services</P2>
                        </Box>
                    </Box>
                    <Box marginTop={25}>
                        <P3>The use of certain Valtech Creative Services may be subject to payment of particular fees, as determined by Valtech Creative in its sole discretion (“Paid Services” and “Fee(s)”, respectively). Valtech Creative will provide notice of such Fees then in effect in relation to such Paid Services. If you wish to receive or use such Paid Services, you are required to pay all applicable Fees in advance.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Valtech Creative reserves the right to change its Fees at any time, upon notice to you if such change may affect your existing subscriptions. If you received a discount or other promotional offer, Valtech Creative shall have the right to automatically and without notice renew your subscription to such Valtech Creative Service(s) at the full applicable Fee.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>All Fees shall be deemed to be in U.S. Dollars, except as specifically stated otherwise in writing by Valtech Creative. To the extent permitted by law (and unless specified otherwise by Valtech Creative in writing), all Fees are exclusive of all taxes (including value added tax, sales tax, goods and services tax, etc.), levies or duties imposed by taxing authorities (“Taxes”), and you shall be responsible for payment of all applicable Taxes relating to your use of the Valtech Creative Services, or to any payments or purchases made by you. If Valtech Creative is obligated to collect or pay Taxes for the Fees payable by you, and whether or not such Taxes were added and collected from you for previous transactions, such Taxes may be added to the payment of any outstanding Fees and will be reflected in the Invoice for such transaction.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>As part of registering or submitting information to receive Paid Services, you also authorize Valtech Creative (either directly or other third parties) to request and collect payment  and service fees (or otherwise charge, refund or take any other billing actions) from our payment provider or your designated banking account, and to make any inquiries Valtech Creative may consider necessary to validate your designated payment account or financial information, in order to ensure prompt payment, including for the purpose of receiving updated payment details from your payment, credit card or banking account provider (e.g., updated expiry date or card number as may be provided to us by your credit card company). You must keep a credit card stored with Valtech Creative to pay for your Paid Services (“Stored Card”) through Stripe, Inc. This will occur automatically through your first subscription payment.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>5.2. Invoices</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Valtech Creative and/or its affiliated companies will issue an invoice or credit memo for any payment of Fees or refund made to or by Valtech Craetive (“Invoice”). Each Invoice will be issued in electronic form, and sent via email or through Stripe, Inc.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>5.3. Subscription Auto-Renewals</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>In order to ensure that you do not experience any interruption or loss of services, certain Paid Services include an automatic renewal option by default, according to which, unless you turn-off the auto-renewal option, such Paid Services will automatically renew upon the end of the applicable subscription period, for a renewal period equal in time to the original subscription period (excluding extended periods) and, unless otherwise notified to you, at the same price (subject to applicable Taxes changes and excluding any discount or other promotional offer provided for the first period) (“Renewing Paid Services”). In the event of failure to collect the Fees owed by you, we may in our sole discretion (but shall not be obligated to) retry to collect on a later time, and/or suspend or cancel your User Account, without further notice.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>By entering into this Agreement and by purchasing a Renewing Paid Service, you acknowledge and agree that the Renewing Paid Service shall automatically renew in accordance with the above terms.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>You may turn-off the auto-renewal option for Renewing Paid Services at any time via emailing Elliott@valtechcreative.com.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>The first subscription payment will be invoiced within 24 hours after the website is deemed complete by both the Web Developer and the User, and will be due 30 days after invoice is received. Auto-renewal will be activated upon the first subscription payment, and will continue every following month, or until subscription is cancelled.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>5.4. Chargebacks</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>If, at any time, we record a decline, chargeback or other rejection of a charge of any payable Fees on your account (“Chargeback”), this will be considered as a breach of your payment obligations hereunder. You will be given a 2 week notice, after which, is Fees are not paid, hosting, CDNs, maintenance, and any other services may be disabled or terminated.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>In the event a Chargeback is performed, your Account may be blocked without the option to re-purchase or re-use it, and any data contained in such User Account, including any domains, applications and Third Party Services may be subject to cancellation and Capacity Loss (as defined in Section 6.3 below).</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Your use of the Valtech Creative Services will not resume until you re-subscribe, and pay any applicable Fees in full, including any fees and expenses incurred by Valtech Creative and/or any Third Party Services for each Chargeback received (including Fees for Valtech Creative Services provided prior to the Chargeback, handling and processing charges and fees incurred by the payment processor).</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>If you have any questions or concerns regarding a payment made to Valtech Creative, we encourage you to first contact Elliott@valtechcreative.com before filing a Chargeback or reversal of payment, in order to prevent the Valtech Creative Services from being cancelled and your User Account being blocked, and to avoid the filing of an unwarranted or erroneous Chargeback, which may result in your being liable for its applicable Fees, in addition to re-payment of all the Fees applicable to the Valtech Creative Services purchased (and charged-back) by you.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>We reserve our right to dispute any Chargeback received, including by providing the relevant credit card company or financial institution with any information and documentation proving that the User responsible for such Chargeback did in fact authorize the transaction and make use of the services rendered thereafter.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <H2>6. Cancellation</H2>
                        <Box marginTop={25}>
                            <P2>6.1. Cancellation by User</P2>
                        </Box>
                    </Box>
                    <Box marginTop={25}>
                        <P3>You may discontinue to use and request to cancel your User Account at any time, in accordance with the instructions available on the Valtech Creative Services. The effective date and time for such cancellation shall be the date and time on which you have completed the cancellation process on the Valtech Creative Website Subscription, and the effective date for cancellation of Paid Services shall be at the end of such Paid Services’ subscription period.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Notwithstanding anything to the contrary in the foregoing, with respect to subscriptions to Renewing Paid Services, such subscription will be discontinued only upon the expiration of the respective period for which you have already made payment. Please note that as the cancellation process may take a few days, in order to avoid the next automatic renewal and respective charge the cancellation request should be made at least fourteen (14) days prior to the expiration of the then-current service period.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Note that Valtech Creative holds sole discretion over whether or not the User is able to renew their subscription at a future date.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>6.2. Cancellation by Valtech Creative</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Failure to comply with any of the Valtech Creative Terms and/or to pay any due Fee shall entitle Valtech Creative to suspend (until full payment is made) or cancel your User Account.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>6.3. Loss of Data, Content and Capacity</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>If your User Valtech Creative Website Subscription is cancelled (whether at your request or at Valtech Creative’s discretion), it may cause or result in the loss of certain content, features, or capacity of your User Account, including any User Content, End User data or other usage data retained therein, and including any domain name reservation or registration that was included in such Services (“Capacity Loss”). Valtech Creative shall not be liable in any way for such Capacity Loss, or for saving a backup of your User Account, User Content or End User data. Please also note that additional Fees may apply to re-activation of a User Account and/or any Valtech Creative Services following their cancellation, as determined by Valtech Creative in its sole discretion.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <H2>7. Limitation of Liability</H2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>To the fullest extent permitted by law in each applicable jurisdiction, Valtech Craetive, shall not be liable to you for any direct, indirect, incidental, special, punitive, exemplary or consequential damages whatsoever, including any damages resulting from (1) errors, mistakes, or inaccuracies of or in any content; (2) any personal injury or property damage related to your use of the Valtech Creative Services; (3) any unauthorized access to or use of our servers and/or any personal information and/or other information stored therein; (4) any interruption or cessation of transmission to or from the Valtech Creative Services; (5) the use or display of any Content or User Content posted, emailed, transmitted, or otherwise made available via the Valtech Creative Services; (6) events beyond the reasonable control of Valtech Creative, including any internet failures, equipment failures, electrical power failures, strikes, labor disputes, riots, insurrections, civil disturbances, shortages of labor or materials, fires, floods, storms, earthquakes, explosions, acts of God, war, terrorism, intergalactic struggles, governmental actions, orders of courts, agencies or tribunals or non-performance of third parties; and/or (7) loss of use, data, profits, goodwill, or other intangible losses, resulting from the use or the inability to use any or all of Valtech Creative Services.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>You acknowledge and agree that these limitations of liability are agreed allocations of risk constituting in part the consideration for Valtech Creative’s services to you, and such limitations will apply even if Valtech Creative has been advised of the possibility of such liabilities.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <H2>8. Indemnity</H2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>You agree to defend, indemnify and hold harmless Valtech Creative from and against any and all claims, damages, obligations, losses, liabilities, costs, debt and expenses (including attorneys’ fees) arising from: (1) your violation of any term of these Terms of Use or any other Valtech Creative Terms; (2) your violation of any third party right, including any copyright, access rights, property, or privacy right, resulting from your User Platform or User Content and/or your use of the Valtech Creative Services, including, without limitation, Valtech Creative Services’ actions for your benefit; and/or (3) any other type of claim that your User Platform and/or User Content caused damage to a third party.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <H2>9. General</H2>
                        <Box marginTop={25}>
                            <P2>9.1. Changes & Updates</P2>
                        </Box>
                    </Box>
                    <Box marginTop={25}>
                        <P3>Valtech Creative reserves the right to change, suspend or terminate the User’s Valtech Creative Website Subscription (or any features thereof, or prices applicable thereto), and/or cancel your access to any of the Valtech Creative Services (including removal of any materials created by you in connection with the Valtech Creative Services) for any reason and/or change any of the Valtech Creative Terms with or without prior notice - at any time and in any manner.</P3>
                    </Box>
                    <Box marginTop={25}>
                        <P3>You agree that Valtech Creative will not be liable to you or to any third party for any modification, suspension or discontinuance of those Valtech Creative Services. If any such changes involve the payment of additional Fees, we will provide you with a notice of such Fees prior to enabling such specific changes. If you fail or refuse to pay such Fees, we may (at our sole discretion) cancel your User Account (as further explained in Section 6 above), continue to support your then-current Valtech Creative Services without enabling such changes, or provide you with alternative Services.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>9.2. Notices</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>We may provide you with notices in any of the following methods: (1) by email, sent to the email address you provided us; and/or (2) through any other means, including any phone number or physical address you provided us. Valtech Creative’s notice to you will be deemed received and effective within twenty four (24) hours after it was published or sent through any of the foregoing methods, unless otherwise indicated in the notice.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>9.3. Relationship</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>The Valtech Creative Terms, and your use of the Valtech Creative Services, do not, and shall not be construed to create any partnership, joint venture, employer-employee, agency, or franchisor-franchisee relationship between Valtech Creative and you.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>9.4. Entire Agreement</P2>
                    </Box>
                    <Box marginTop={25}>
                        <P3>These Valtech Creative Terms shall constitute the entire agreement between you and Valtech Creative concerning the subject matter hereof or thereof, and supersede any and all prior or contemporaneous agreements, understandings, promises, conditions, negotiations, covenants or representations, whether written or oral, between Valtech Creative and you, including those made by or between any of our respective representatives, with respect to any of the Valtech Creative Services. You further agree that you are not relying upon any promise, inducement, representation, statement, disclosure or duty of disclosure of Valtech Creative in entering into any of the Valtech Creative Terms.</P3>
                    </Box>
                    <Box marginTop={75}>
                        <P2>9.5. Customer Service Contact</P2>
                    </Box>
                    <Box marginTop={25} marginBottom={100}>
                        <P3>To get in touch with our Customer Service, please email Elliott@valtechcreative.com</P3>
                    </Box>
                    <Box marginTop={50} marginBottom={100}>
                        <Flex align={'center'} justify={'center'}>
                            <Link href='/#subscriptions'>
                                <Button>Back to Subscriptions</Button>
                            </Link>
                        </Flex>
                    </Box>
                </Container>
            </main>
        </>
    )
}

export default termsOfUse

export const LI = styled.li`
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: #fff;

    ${respondTo.sm`
        font-weight: 400;
        font-size: 16px;
    `}

    ${respondTo.md`
        font-size: 18px;
    `}

    ${respondTo.lg`
        font-size: 20px;
    `}
`
