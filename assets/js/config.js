// Email Signature Generator Configuration — SuamiSihat Brand Guidelines
const CONFIG = {
    // Default placeholder data
    defaults: {
        firstName: 'Dr. Amin',
        lastName: 'Radzi',
        credentials: 'MD, MMC 48291',
        position: 'Consultant Men\'s Health Physician',
        department: 'Clinical Services',
        email: 'dr.amin@suamisihat.clinic',
        phone: '+60 12-345 6789',
        websites: {
            clinic: 'suamisihat.clinic',
            portal: 'suamisihat.com.my'
        },
        showBookingCta: true,
        bookingText: 'Book Consultation',
        bookingUrl: 'https://suamisihat.clinic/appointment',
        showBanner: true,
        templateStyle: 'executive' // 'executive', 'horizontal', 'compact'
    },

    // Office/Company selections with company-specific logos and contact info
    offices: [
        {
            id: 'SSC',
            name: 'SuamiSihat Healthcare Sdn Bhd',
            shortName: 'SS Healthcare',
            ssm: '202101044704 (1445004-V)',
            address: 'Lot 8-3A, Level 1, UOA Business Park, Jalan Pengaturcara U1/51A, Seksyen U1, 40150 Shah Alam, Selangor.',
            phone: '+60 3 6044 1878',
            logoUrl: 'assets/img/company/logo_ssc_secondary_dark.png',
            logoLightUrl: 'assets/img/company/logo_ssc_secondary_light.png',
            companyDomain: 'suamisihat.clinic'
        },
        {
            id: 'SSH',
            name: 'SuamiSihat Holding Sdn Bhd',
            shortName: 'SS Holding',
            ssm: '202001024558 (1380878-U)',
            address: 'Lot 8-3A, Level 1, UOA Business Park, Jalan Pengaturcara U1/51A, Seksyen U1, 40150 Shah Alam, Selangor.',
            phone: '+60 3 6044 1878',
            logoUrl: 'assets/img/company/logo_ssh_secondary_dark.png',
            logoLightUrl: 'assets/img/company/logo_ssh_secondary_light.png',
            companyDomain: 'suamisihat.com'
        },
        {
            id: 'SSW',
            name: 'SuamiSihat Wellness Sdn Bhd',
            shortName: 'SS Wellness',
            ssm: '202101024558 (1403044-V)',
            address: 'Lot 9-3A, Level 1, UOA Business Park, Jalan Pengaturcara U1/51A, Seksyen U1, 40150 Shah Alam, Selangor.',
            phone: '+60 3 6044 1878',
            logoUrl: 'assets/img/company/logo_ssw_secondary_dark.png',
            logoLightUrl: 'assets/img/company/logo_ssw_secondary_light.png',
            companyDomain: 'suamisihat.clinic'
        },
        {
            id: 'SSE',
            name: 'SuamiSihat Ecommerce Sdn Bhd',
            shortName: 'SS Ecommerce',
            ssm: '202501018804 (1621610-T)',
            address: 'No. 9, Tingkat 2 Jalan Kemboja 33, Taman Aman, 42700 Banting, Selangor.',
            phone: '+60 7 6044 1878',
            logoUrl: 'assets/img/company/logo_sse_secondary_dark.png',
            logoLightUrl: 'assets/img/company/logo_sse_secondary_light.png',
            companyDomain: 'suamisihat.com.my'
        },
        {            
            id: 'SST',
            name: 'SuamiSihat Technology Sdn Bhd',
            shortName: 'SS Technology',
            ssm: '202401017849 (1569771-W)',
            address: 'No. 7, Tingkat 2 Jalan Kemboja 33, Taman Aman, 42700 Banting, Selangor.',
            phone: '+60 7 6044 1878',
            logoUrl: 'assets/img/company/logo_sst_secondary_dark.png',
            logoLightUrl: 'assets/img/company/logo_sst_secondary_light.png',
            companyDomain: 'suamisihat.tech'
        }
    ],

    // Pre-configured departments for corporate hierarchy
    departments: [
        'Clinical Services',
        'Medical & Therapeutics',
        'Patient Care & Nursing',
        'Executive Management',
        'Operations & Quality',
        'Customer Experience',
        'Ecommerce & Logistics',
        'Marketing & Brand',
        'Technology & Data'
    ],

    // Social media links with brand azure icons (both PNG for email clients and SVG for vector display)
    socialMedia: {
        whatsapp: {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send/?phone=601156672841&text=%28%23M%29+Salam%2C+Saya+Nak+Improve+Kesihatan+Lelaki+Dengan+SuamiSihat&type=phone_number&app_absent=0',
            iconPng: 'assets/img/social/whatsapp.png',
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#043388"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
        },
        facebook: {
            name: 'Facebook',
            url: 'https://www.facebook.com/suamisihat',
            iconPng: 'assets/img/social/facebook.png',
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#043388"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
        },
        instagram: {
            name: 'Instagram',
            url: 'https://www.instagram.com/suamisihat.clinic',
            iconPng: 'assets/img/social/instagram.png',
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#043388"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
        },
        linkedin: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/suamisihat',
            iconPng: 'assets/img/social/linkedin.png',
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#043388"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
        },
        youtube: {
            name: 'YouTube',
            url: 'https://www.youtube.com/@SuamiSihat',
            iconPng: 'assets/img/social/youtube.png'
        },
        telegram: {
            name: 'Telegram',
            url: 'https://t.me/suamisihat',
            iconPng: 'assets/img/social/telegram.png'
        },
        tiktok: {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@suamisihat',
            iconPng: 'assets/img/social/tiktok.png'
        }
    },

    // SuamiSihat authoritative brand colors & assets
    branding: {
        baseUrl: 'https://sign.suamisihat.myds.me/',
        primaryColor: '#043388',      // SS Blue
        prussianBlue: '#022057',      // SS Prussian Blue
        secondaryColor: '#21A1F7',    // Azure
        malibu: '#6DC6EC',            // Malibu
        lion: '#BD9A73',              // Lion Gold
        fawn: '#CCAC8D',              // Warm Fawn
        charcoal: '#334155',          // Slate 700
        muted: '#64748B',             // Slate 500
        white: '#ffffff',
        
        logoUrl: 'assets/img/ss_icon_dark.svg', 
        logoLightUrl: 'assets/img/ss_icon_light.svg',
        bannerUrl: 'assets/img/ss-banner.gif', 
        bannerLink: 'https://suamisihat.clinic',
        companyName: 'SuamiSihat Group'
    },

    // Email confidentiality disclaimer
    disclaimer: 'CONFIDENTIALITY NOTICE: The information contained in this email and any attachments is strictly confidential, legally privileged, and intended solely for the use of the individual or entity named. If you are not the intended recipient, please be notified that any disclosure, copying, distribution, or taking any action in reliance on the contents is strictly prohibited. If you have received this transmission in error, please immediately notify the sender and permanently delete this email.'
};
