export interface ServiceItem {
  id: string;
  nameHi: string;
  nameEn: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  nameHi: string;
  nameEn: string;
  icon: string;
  services: ServiceItem[];
}

export interface DocFinderEntry {
  id: string;
  nameHi: string;
  nameEn: string;
  docsHi: string[];
  docsEn: string[];
  time: number;
  notesHi: string;
  notesEn: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'identity',
    nameHi: 'पहचान पत्र सेवाएं',
    nameEn: 'Identity Services',
    icon: 'IdCard',
    services: [
      { id: 'aadhaar-update', nameHi: 'Aadhaar Update', nameEn: 'Aadhaar Update', icon: 'Fingerprint' },
      { id: 'aadhaar-print', nameHi: 'Aadhaar Print', nameEn: 'Aadhaar Print', icon: 'Printer' },
      { id: 'pan-apply', nameHi: 'नया PAN Card', nameEn: 'New PAN Card', icon: 'CreditCard' },
      { id: 'pan-correction', nameHi: 'PAN Correction', nameEn: 'PAN Correction', icon: 'FileEdit' },
      { id: 'voter-id', nameHi: 'Voter ID', nameEn: 'Voter ID', icon: 'Vote' },
      { id: 'passport', nameHi: 'Passport', nameEn: 'Passport', icon: 'BookOpen' },
      { id: 'driving-license', nameHi: 'Driving License', nameEn: 'Driving License', icon: 'Car' },
    ],
  },
  {
    id: 'banking',
    nameHi: 'बैंकिंग सेवाएं',
    nameEn: 'Banking Services',
    icon: 'Landmark',
    services: [
      { id: 'account-open', nameHi: 'Account Opening', nameEn: 'Account Opening', icon: 'Building2' },
      { id: 'balance-check', nameHi: 'Balance Check', nameEn: 'Balance Check', icon: 'Wallet' },
      { id: 'money-transfer', nameHi: 'Money Transfer', nameEn: 'Money Transfer', icon: 'ArrowRightLeft' },
      { id: 'mini-statement', nameHi: 'Mini Statement', nameEn: 'Mini Statement', icon: 'Receipt' },
      { id: 'aadhaar-pan-link', nameHi: 'Aadhaar-PAN Link', nameEn: 'Aadhaar-PAN Link', icon: 'Link' },
      { id: 'aadhaar-bank-link', nameHi: 'Aadhaar-Bank Link', nameEn: 'Aadhaar-Bank Link', icon: 'Link2' },
    ],
  },
  {
    id: 'insurance',
    nameHi: 'बीमा सेवाएं',
    nameEn: 'Insurance Services',
    icon: 'Shield',
    services: [
      { id: 'pm-jeevan-jyoti', nameHi: 'PM Jeevan Jyoti', nameEn: 'PM Jeevan Jyoti', icon: 'Heart' },
      { id: 'pm-suraksha-bima', nameHi: 'PM Suraksha Bima', nameEn: 'PM Suraksha Bima', icon: 'ShieldCheck' },
      { id: 'ayushman-bharat', nameHi: 'Ayushman Bharat', nameEn: 'Ayushman Bharat', icon: 'Hospital' },
      { id: 'crop-insurance', nameHi: 'Crop Insurance', nameEn: 'Crop Insurance', icon: 'Wheat' },
    ],
  },
  {
    id: 'farmer',
    nameHi: 'किसान सेवाएं',
    nameEn: 'Farmer Services',
    icon: 'Sprout',
    services: [
      { id: 'kisan-credit-card', nameHi: 'Kisan Credit Card', nameEn: 'Kisan Credit Card', icon: 'CreditCard' },
      { id: 'pm-kisan', nameHi: 'PM Kisan', nameEn: 'PM Kisan', icon: 'Banknote' },
      { id: 'crop-registration', nameHi: 'फसल पंजीकरण', nameEn: 'Crop Registration', icon: 'ClipboardList' },
      { id: 'soil-health', nameHi: 'मिट्टी जांच', nameEn: 'Soil Health Card', icon: 'Leaf' },
    ],
  },
  {
    id: 'education',
    nameHi: 'शिक्षा सेवाएं',
    nameEn: 'Education Services',
    icon: 'GraduationCap',
    services: [
      { id: 'scholarship', nameHi: 'Scholarship Form', nameEn: 'Scholarship Form', icon: 'Award' },
      { id: 'exam-form', nameHi: 'Exam Form', nameEn: 'Exam Form', icon: 'FileText' },
      { id: 'result-download', nameHi: 'Result Download', nameEn: 'Result Download', icon: 'Download' },
      { id: 'certificate', nameHi: 'Certificate', nameEn: 'Certificate', icon: 'ScrollText' },
      { id: 'admission-form', nameHi: 'Admission Form', nameEn: 'Admission Form', icon: 'BookMarked' },
    ],
  },
  {
    id: 'utility',
    nameHi: 'उपयोगिता सेवाएं',
    nameEn: 'Utility Services',
    icon: 'Zap',
    services: [
      { id: 'electricity-bill', nameHi: 'बिजली बिल', nameEn: 'Electricity Bill', icon: 'Lightbulb' },
      { id: 'water-bill', nameHi: 'पानी बिल', nameEn: 'Water Bill', icon: 'Droplets' },
      { id: 'gas-bill', nameHi: 'Gas Bill', nameEn: 'Gas Bill', icon: 'Flame' },
      { id: 'mobile-recharge', nameHi: 'Mobile Recharge', nameEn: 'Mobile Recharge', icon: 'Smartphone' },
      { id: 'dth-recharge', nameHi: 'DTH Recharge', nameEn: 'DTH Recharge', icon: 'Satellite' },
      { id: 'train-ticket', nameHi: 'Train Ticket', nameEn: 'Train Ticket', icon: 'Train' },
    ],
  },
  {
    id: 'printing',
    nameHi: 'प्रिंटिंग सेवाएं',
    nameEn: 'Printing Services',
    icon: 'Printer',
    services: [
      { id: 'doc-print', nameHi: 'Document Print', nameEn: 'Document Print', icon: 'File' },
      { id: 'photo-print', nameHi: 'Photo Print', nameEn: 'Photo Print', icon: 'Image' },
      { id: 'xerox', nameHi: 'Xerox', nameEn: 'Xerox', icon: 'Copy' },
      { id: 'lamination', nameHi: 'Lamination', nameEn: 'Lamination', icon: 'Layers' },
      { id: 'binding', nameHi: 'Binding', nameEn: 'Binding', icon: 'BookOpen' },
      { id: 'scanning', nameHi: 'Scanning', nameEn: 'Scanning', icon: 'Scan' },
    ],
  },
  {
    id: 'documentation',
    nameHi: 'दस्तावेज़ीकरण',
    nameEn: 'Documentation',
    icon: 'FileCheck',
    services: [
      { id: 'affidavit', nameHi: 'Affidavit', nameEn: 'Affidavit', icon: 'Scroll' },
      { id: 'income-certificate', nameHi: 'आय प्रमाण पत्र', nameEn: 'Income Certificate', icon: 'IndianRupee' },
      { id: 'caste-certificate', nameHi: 'जाति प्रमाण पत्र', nameEn: 'Caste Certificate', icon: 'Badge' },
      { id: 'residence-certificate', nameHi: 'निवास प्रमाण पत्र', nameEn: 'Residence Certificate', icon: 'Home' },
      { id: 'death-certificate', nameHi: 'मृत्यु प्रमाण पत्र', nameEn: 'Death Certificate', icon: 'FileX' },
      { id: 'birth-certificate', nameHi: 'जन्म प्रमाण पत्र', nameEn: 'Birth Certificate', icon: 'Baby' },
    ],
  },
  {
    id: 'photo',
    nameHi: 'फोटो सेवाएं',
    nameEn: 'Photo Services',
    icon: 'Camera',
    services: [
      { id: 'passport-photo', nameHi: 'Passport Photo', nameEn: 'Passport Photo', icon: 'UserCircle' },
      { id: 'aadhaar-photo', nameHi: 'Aadhaar Photo', nameEn: 'Aadhaar Photo', icon: 'Fingerprint' },
      { id: 'pan-photo', nameHi: 'PAN Photo', nameEn: 'PAN Photo', icon: 'CreditCard' },
      { id: 'digital-signature', nameHi: 'Digital Signature', nameEn: 'Digital Signature', icon: 'PenTool' },
    ],
  },
  {
    id: 'form-filling',
    nameHi: 'Form Filling',
    nameEn: 'Form Filling',
    icon: 'ClipboardEdit',
    services: [
      { id: 'online-form', nameHi: 'Online Form', nameEn: 'Online Form', icon: 'Globe' },
      { id: 'gov-form', nameHi: 'सरकारी Form', nameEn: 'Government Form', icon: 'Building' },
      { id: 'application', nameHi: 'Application', nameEn: 'Application', icon: 'PenLine' },
      { id: 'complaint', nameHi: 'शिकायत', nameEn: 'Complaint', icon: 'MessageSquare' },
    ],
  },
];

export const docFinderData: DocFinderEntry[] = [
  {
    id: 'aadhaar-update',
    nameHi: 'Aadhaar Update',
    nameEn: 'Aadhaar Update',
    docsHi: ['Aadhaar Number', 'Mobile Number', 'Address Proof (यदि पता बदलना हो)', 'Photo ID'],
    docsEn: ['Aadhaar Number', 'Mobile Number', 'Address Proof (if changing address)', 'Photo ID'],
    time: 3,
    notesHi: 'Mobile Number आपके Aadhaar से Link होना चाहिए।',
    notesEn: 'Mobile Number should be linked with your Aadhaar.',
  },
  {
    id: 'pan-apply',
    nameHi: 'नया PAN Card',
    nameEn: 'New PAN Card',
    docsHi: ['Aadhaar Card', 'Photo', 'Signature', 'Email ID', 'Mobile Number'],
    docsEn: ['Aadhaar Card', 'Photo', 'Signature', 'Email ID', 'Mobile Number'],
    time: 15,
    notesHi: 'E-PAN 48 घंटे में Email पर मिल जाता है। Physical PAN 15-20 दिन में आता है।',
    notesEn: 'E-PAN is received on email within 48 hours. Physical PAN arrives in 15-20 days.',
  },
  {
    id: 'passport',
    nameHi: 'Passport Apply',
    nameEn: 'Passport Apply',
    docsHi: ['Aadhaar Card', 'PAN Card', 'Voter ID (वैकल्पिक)', '10वीं की Marksheet', 'Passport Size Photo', 'Address Proof'],
    docsEn: ['Aadhaar Card', 'PAN Card', 'Voter ID (optional)', '10th Marksheet', 'Passport Size Photo', 'Address Proof'],
    time: 30,
    notesHi: 'Passport Office में Appointment के बाद जाना होगा। Police Verification भी होगी।',
    notesEn: 'You need to visit Passport Office after appointment. Police Verification will also be done.',
  },
  {
    id: 'voter-id',
    nameHi: 'Voter ID',
    nameEn: 'Voter ID',
    docsHi: ['Aadhaar Card', 'Photo', 'Address Proof', 'Age Proof'],
    docsEn: ['Aadhaar Card', 'Photo', 'Address Proof', 'Age Proof'],
    time: 30,
    notesHi: 'नया Voter ID बनने में 30-45 दिन लग सकते हैं।',
    notesEn: 'New Voter ID may take 30-45 days to be issued.',
  },
  {
    id: 'account-open',
    nameHi: 'Bank Account Opening',
    nameEn: 'Bank Account Opening',
    docsHi: ['Aadhaar Card', 'PAN Card', 'Photo', 'Mobile Number', 'Initial Deposit Amount'],
    docsEn: ['Aadhaar Card', 'PAN Card', 'Photo', 'Mobile Number', 'Initial Deposit Amount'],
    time: 1,
    notesHi: 'Account उसी दिन Activate हो जाता है। Passbook और Debit Card बाद में आते हैं।',
    notesEn: 'Account is activated the same day. Passbook and Debit Card arrive later.',
  },
  {
    id: 'driving-license',
    nameHi: 'Driving License',
    nameEn: 'Driving License',
    docsHi: ['Aadhaar Card', 'Address Proof', 'Age Proof', 'Medical Certificate', 'Photo'],
    docsEn: ['Aadhaar Card', 'Address Proof', 'Age Proof', 'Medical Certificate', 'Photo'],
    time: 30,
    notesHi: 'पहले Learning License बनता है, फिर Permanent License के लिए Apply कर सकते हैं।',
    notesEn: 'First a Learning License is issued, then you can apply for Permanent License.',
  },
  {
    id: 'income-certificate',
    nameHi: 'आय प्रमाण पत्र',
    nameEn: 'Income Certificate',
    docsHi: ['Aadhaar Card', 'Ration Card', 'Self Declaration', 'Salary Slip (यदि नौकरी हो)'],
    docsEn: ['Aadhaar Card', 'Ration Card', 'Self Declaration', 'Salary Slip (if employed)'],
    time: 15,
    notesHi: 'यह Certificate Scholarship और सरकारी योजनाओं के लिए ज़रूरी है।',
    notesEn: 'This Certificate is required for Scholarship and government schemes.',
  },
  {
    id: 'caste-certificate',
    nameHi: 'जाति प्रमाण पत्र',
    nameEn: 'Caste Certificate',
    docsHi: ['Aadhaar Card', 'Ration Card', 'Father\'s Caste Certificate', 'School Certificate', 'Photo'],
    docsEn: ['Aadhaar Card', 'Ration Card', 'Father\'s Caste Certificate', 'School Certificate', 'Photo'],
    time: 15,
    notesHi: 'आवेदन के बाद Online Verification होती है।',
    notesEn: 'Online Verification is done after application.',
  },
  {
    id: 'scholarship',
    nameHi: 'Scholarship Form',
    nameEn: 'Scholarship Form',
    docsHi: ['Aadhaar Card', 'Bank Passbook', 'Income Certificate', 'Caste Certificate', 'Marksheet', 'College ID'],
    docsEn: ['Aadhaar Card', 'Bank Passbook', 'Income Certificate', 'Caste Certificate', 'Marksheet', 'College ID'],
    time: 7,
    notesHi: 'सभी दस्तावेज़ Online Upload करने होंगे।',
    notesEn: 'All documents need to be uploaded online.',
  },
  {
    id: 'pm-kisan',
    nameHi: 'PM Kisan',
    nameEn: 'PM Kisan',
    docsHi: ['Aadhaar Card', 'Bank Passbook', 'Land Details (Khasra)', 'Mobile Number'],
    docsEn: ['Aadhaar Card', 'Bank Passbook', 'Land Details (Khasra)', 'Mobile Number'],
    time: 7,
    notesHi: 'Registration के बाद ₹2000 की किस्त सीधे Bank Account में आती है।',
    notesEn: 'After registration, ₹2000 installment comes directly to Bank Account.',
  },
];

export const allServiceNames = docFinderData.map(d => ({
  id: d.id,
  nameHi: d.nameHi,
  nameEn: d.nameEn,
}));

export const businessInfo = {
  name: 'Apna Cyber Cafe',
  nameHi: 'अपना साइबर कैफ़े',
  address: 'Sitarampur, Jichhopokhar Road, Adarsh Nagar, Pildauri, Sultanganj, Bihar - 813213',
  phone: '+91 8271099312',
  whatsapp: 'https://wa.me/918271099312',
  googleRating: 4.3,
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.7!2d86.7298088!3d25.2365077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzExLjQiTiA4NsKwNDMnMzcuMyJF!5e0!3m2!1sen!2sin!4v1',
  mapDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=25.2365077,86.7298088',
  workingHours: 'सोमवार - रविवार: सुबह 9:00 - शाम 7:00',
  workingHoursEn: 'Monday - Sunday: 9:00 AM - 7:00 PM',
};