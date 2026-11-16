/* Central TransEaz Configuration — Edit WhatsApp number, service areas, and fees here */

export const CONFIG = {
  businessName: 'TransEaz',
  whatsappDisplay: '+256 786 436524',
  whatsappNumber: '256786436524',

  serviceAreas: [
    {
      id: 'seeta-university',
      name: 'Seeta University',
      description: 'Main campus, hostels, lecture blocks, and campus gates.',
      estimatedFeeUGX: 3000
    },
    {
      id: 'seeta',
      name: 'Seeta',
      description: 'Seeta trading centre, surrounding hostels, and residential roads.',
      estimatedFeeUGX: 4000
    },
    {
      id: 'mukono',
      name: 'Mukono',
      description: 'Mukono Town, Wantoni, Nassuuti, and nearby campus areas.',
      estimatedFeeUGX: 5000
    },
    {
      id: 'mbalala',
      name: 'Mbalala',
      description: 'Mbalala trading centre and surrounding residential zones.',
      estimatedFeeUGX: 5500
    }
  ],

  deliveryWindows: [
    'Same-day Morning (9:00 AM – 12:00 PM)',
    'Same-day Afternoon (12:00 PM – 4:00 PM)',
    'Same-day Evening (4:00 PM – 7:30 PM)',
    'Next-day Scheduled Window'
  ],

  errandTypes: [
    'Campus Parcel Drop',
    'Local Shop Purchase',
    'Document or Assignment Pickup',
    'Hostel-to-Hostel Delivery',
    'Pharmacy / Personal Essentials Collection',
    'Other Eligible Local Errand'
  ],

  parcelSizes: [
    'Small (fits in hand or envelope)',
    'Medium (backpack or shopping bag size)',
    'Large (box or multiple bags — subject to courier capacity)'
  ],

  excludedServicesNote:
    'TransEaz handles legal, safe, portable everyday goods, errands, and deliveries within Seeta University, Seeta, Mbalala, and Mukono. Requests outside these approved areas are not guaranteed.'
};
