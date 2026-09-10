# SS Signature Generator

A professional email signature generator for SS Health companies, featuring a modern dark/light theme interface and office-specific branding.

![SS Health](assets/img/ss_icon_dark.svg)

## 🌟 Features

- **🎨 Dual Theme Support**: Light and dark mode with smooth transitions
- **🏢 Multi-Company Support**: Generate signatures for 5 SS Health companies
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎯 Office-Specific Logos**: Automatic logo selection based on selected office
- **✅ Real-Time Validation**: Email and phone validation with visual feedback
- **📋 Flexible Copy Options**: Copy as Rich Text (default) or HTML with dropdown menu
- **🔄 Live Preview**: Real-time signature preview as you type
- **💼 Professional Layout**: Clean, modern design following SS Health brand guidelines
- **🌐 Social Media Integration**: Pre-configured social media links with Azure blue icons
- **⚙️ Configuration Manager**: Admin page to manage offices, social media, and branding
- **📄 Template System**: Reusable signature template for easy customization
- **❓ Built-in Help**: Popup guide for using signatures in Gmail

## 📁 File Structure

```
ss-signature/
├── index.html              # Main application file
├── config.html             # Configuration management page (NEW)
├── README.md              # This documentation
└── assets/
    ├── js/
    │   └── config.js      # Configuration file (links, offices, branding)
    ├── css/
    │   └── ss.css         # Main stylesheet (NEW)
    ├── templates/
    │   └── signature-template.html  # Reusable signature template (NEW)
    ├── img/
    │   ├── ss-banner.gif  # Default animated email signature banner
    │   ├── banner.png     # Static banner fallback
    │   ├── ss_icon_dark.svg
    │   ├── ss_icon_light.svg
    │   └── company/       # Company-specific logos
    │       ├── logo_ssh_secondary_dark.svg
    │       ├── logo_ssh_secondary_light.svg
    │       ├── logo_ssc_secondary_dark.svg
    │       ├── logo_ssc_secondary_light.svg
    │       ├── logo_sse_secondary_dark.svg
    │       ├── logo_sse_secondary_light.svg
    │       ├── logo_ssw_secondary_dark.svg
    │       ├── logo_ssw_secondary_light.svg
    │       ├── logo_sst_secondary_dark.svg
    │       └── logo_sst_secondary_light.svg
    ├── css/               # (Optional) Additional stylesheets
    └── favicon/           # Favicon files
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- No server required - runs entirely in the browser

### Installation

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Start generating signatures!

```bash
# Option 1: Direct open
# Simply double-click index.html

# Option 2: Local server (optional)
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 📖 Usage Guide

### Generating a Signature

1. **Fill in Your Information**
   - First Name
   - Last Name
   - Position/Title
   - Email Address (validated in real-time)
   - Mobile Phone Number (only numbers, +, -, spaces allowed)
   - Select Office Location

2. **Real-Time Validation**
   - **Email**: Shows green border for valid, red for invalid
   - **Phone**: Automatically removes invalid characters
   - Error messages appear below fields when needed

3. **Click "Generate"**
   - Preview appears in the bottom section
   - Signature adapts to current theme (light/dark)

4. **Copy to Clipboard**
   - **Copy as Rich Text** (Default): Click main button or select from dropdown
     - Best for Gmail and email clients
     - Preserves all formatting
   - **Copy as HTML**: Select from dropdown menu
     - Copies raw HTML source code
     - Useful for developers or custom implementations
   - **Manual Copy**: Click "Select All for Manual Copy" then `Ctrl+C`

5. **Paste into Email Client**
   - Open Gmail Settings → Signature section
   - Paste with `Ctrl+V` (preserves formatting)
   - Click "Save Changes"

### Using the Configuration Manager

1. **Access Config Page**
   - Click "⚙️ Configuration Manager" link in header
   - Or navigate to `config.html`

2. **Edit Configuration**
   - **Offices Tab**: Add, edit, or delete office locations
   - **Social Media Tab**: Update social media URLs
   - **Branding Tab**: Modify brand colors and asset URLs
   - **Defaults Tab**: Change default form values

3. **Save Changes**
   - Click "💾 Save & Download Config"
   - Replace `assets/js/config.js` with downloaded file
   - Refresh main page to see changes

### Using in Gmail

Click the **❓ Help** button in the app for detailed Gmail integration instructions.

## 🏢 Supported Companies

The generator supports signatures for all SS Health companies:

| ID  | Company Name                  | SSM Registration No.     | Logo File                         |
| --- | ----------------------------- | ------------------------ | --------------------------------- |
| SSC | SuamiSihat Healthcare Sdn Bhd | 202101044704 (1445004-V) | logo_ssc_secondary_dark/light.svg |
| SSH | SuamiSihat Holding Sdn Bhd    | 202001024558 (1380878-U) | logo_ssh_secondary_dark/light.svg |
| SSW | SuamiSihat Wellness Sdn Bhd   | 202101024558 (1403044-V) | logo_ssw_secondary_dark/light.svg |
| SSE | SuamiSihat Ecommerce Sdn Bhd  | 202501018804 (1621610-T) | logo_sse_secondary_dark/light.svg |
| SST | SuamiSihat Technology Sdn Bhd | 202401017849 (1569771-W) | logo_sst_secondary_dark/light.svg |

## 🎨 Customization

### Using Configuration Manager (Recommended)

The easiest way to customize settings is through the **Configuration Manager**:

1. Open `config.html` or click "⚙️ Configuration Manager" link
2. Navigate through tabs to edit:
   - **Offices**: Company locations, addresses, phones, logos
   - **Social Media**: Update all social media URLs
   - **Branding**: Brand colors and asset URLs
   - **Defaults**: Default form values
3. Click "💾 Save & Download Config"
4. Replace `assets/js/config.js` with downloaded file

### Manual Editing (Advanced)

Alternatively, edit `assets/js/config.js` directly:

#### Updating Company Information

```javascript
offices: [
    {
        id: 'SSH',
        name: 'SuamiSihat Holding Sdn Bhd',
        address: 'Your Address Here',
        phone: '+60 3 6044 1878',
        logoUrl: 'assets/img/company/logo_ssh_secondary_dark.svg',
        logoLightUrl: 'assets/img/company/logo_ssh_secondary_light.svg'
    },
    // Add more offices...
]
```

#### Updating Social Media Links

```javascript
socialMedia: {
    facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/yourpage',
        icon: `<svg>...</svg>`
    },
    // Add more platforms...
}
```

#### Brand Colors

All colors follow SS Health brand guidelines:

```javascript
branding: {
    primaryColor: '#043388',      // SS Blue
    secondaryColor: '#21A1F7',    // Azure
    prussianBlue: '#022057',      // SS Prussian Blue
    malibu: '#6DC6EC',            // Malibu
    // ... more colors
}
```

## 🎯 Features Breakdown

### Theme Toggle
- **Light Mode**: Default theme, optimized for daytime use
- **Dark Mode**: Eye-friendly dark theme
- **Persistence**: Theme preference saved in browser localStorage
- **Smooth Transitions**: Animated theme switching

### Logo Selection
- **Automatic**: Logo changes based on selected office
- **Theme-Aware**: 
  - Preview uses theme-appropriate logo (dark/light)
  - Email signature always uses light logo (for white backgrounds)

### Responsive Typography
- **Fluid Font Sizes**: Uses CSS `clamp()` for smooth scaling
- **Breakpoints**:
  - Desktop (>768px): 16px base
  - Tablet (≤768px): 14px base
  - Mobile (≤480px): 13px base

### Social Media Icons
- **Color**: SS Health secondary color (#21A1F7 - Azure)
- **Spacing**: 4 spaces between icons for better touch targets
- **Platforms**: Facebook, X (Twitter), LinkedIn, Instagram, YouTube, TikTok, WhatsApp, Telegram

### Input Validation
- **Email Validation**:
  - Real-time validation using RFC 5322 regex
  - Visual feedback: green border (valid), red border (invalid)
  - Inline error messages
  - Prevents submission with invalid email
- **Phone Validation**:
  - Only allows: numbers, `+`, `-`, and spaces
  - Auto-removes invalid characters as you type
  - Paste protection filters invalid characters
  - Visual feedback with color-coded borders

### Copy Options
- **Copy as Rich Text** (Default):
  - Preserves all formatting
  - Best for email clients (Gmail, Outlook)
  - One-click operation
- **Copy as HTML**:
  - Copies raw HTML source code
  - Useful for developers
  - Can be pasted into code editors
- **Dropdown Menu**:
  - Click arrow (▼) to switch modes
  - Active mode highlighted
  - Button text updates to show current mode

### Configuration Manager
- **Purpose**: Admin interface to manage all configuration data
- **Features**:
  - Add/Edit/Delete office locations
  - Update social media links
  - Modify brand colors with color pickers
  - Change default form values
  - Export config as `config.js` file
  - Import existing config for editing
- **Access**: Click "⚙️ Configuration Manager" in header

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **Vanilla JavaScript**: No dependencies
- **SVG Icons**: Scalable vector graphics
- **Google Fonts**: Inter font family

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Email Client Compatibility
- ✅ Gmail
- ✅ Outlook (Web & Desktop)
- ✅ Apple Mail
- ✅ Thunderbird
- ⚠️ Some older clients may not support all styling

## 📝 Configuration Reference

### Default Data (`config.js`)

```javascript
defaults: {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Senior Developer',
    email: 'john.doe@suamisihat.com',
    phone: '+60 12-345 6789',
    website: 'suamisihat.com.my'
}
```

### Signature Specifications

- **Logo Size**: 120px × auto
- **Banner Size**: Max 528px wide
- **Font**: Arial, sans-serif
- **Name Color**: SS Blue (#043388)
- **Social Icon Color**: Azure (#21A1F7)
- **Layout**: HTML 4.0 Transitional (email-safe)

## 🐛 Troubleshooting

### Signature Pastes as Plain Text
- Use "Select All for Manual Copy" button
- Ensure you're using `Ctrl+V` (not "Paste as plain text")
- Try a different browser (Chrome recommended)

### Logo Not Displaying
- Check logo file paths in `config.js`
- Ensure logo files exist in `assets/img/company/`
- Verify file names match configuration

### Theme Not Saving
- Check browser localStorage is enabled
- Clear browser cache and try again
- Ensure JavaScript is enabled

### Preview Not Updating
- Click "Generate" button after making changes
- Check browser console for errors (F12)
- Refresh the page and try again

## 🔐 Privacy & Security

- **No Data Collection**: All processing happens locally in your browser
- **No Server Calls**: Completely offline-capable
- **No Tracking**: No analytics or third-party scripts
- **localStorage Only**: Theme preference stored locally

## 📄 License

© 2024 SS Health. All rights reserved.

## 👥 Support

For issues, questions, or feature requests:
- **Email**: branding@suamisihat.com
- **Documentation**: See this README
- **In-App Help**: Click the ❓ button

## 🔄 Version History

### v2.0.0 (Current)
- ✅ **NEW**: Real-time email validation with visual feedback
- ✅ **NEW**: Phone number validation (numbers, +, -, spaces only)
- ✅ **NEW**: Copy button dropdown (Rich Text / HTML options)
- ✅ **NEW**: Configuration Manager page for easy customization
- ✅ **NEW**: Reusable signature template system
- ✅ **IMPROVED**: Enhanced user experience with validation
- ✅ **IMPROVED**: Flexible copy options for different use cases

### v1.0.0
- ✅ Initial release
- ✅ Multi-company support (5 companies)
- ✅ Dark/light theme toggle
- ✅ Office-specific logos
- ✅ Responsive design
- ✅ Social media integration
- ✅ Gmail integration guide
- ✅ One-click copy functionality

## 🚦 Quick Start Checklist

- [ ] Open `index.html` in browser
- [ ] Fill in personal information (watch for validation feedback)
- [ ] Ensure email shows green border (valid)
- [ ] Ensure phone shows green border (valid)
- [ ] Select your office
- [ ] Click "Generate"
- [ ] Choose copy mode (Rich Text or HTML) from dropdown
- [ ] Click "Copy"
- [ ] Paste into Gmail settings
- [ ] Save and test!

---

**Made with ❤️ for SS Health**
