// assets
import {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers,
  IconSettings,
  IconCards,
  IconTicket
} from '@tabler/icons';

// constant
const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers,
  IconSettings,
  IconCards,
  IconTicket
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  title: 'Dashboard-Menu',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: '01',
      title: 'Visitors',
      type: 'item',
      url: '/dashboard/visitors',
      icon: icons.IconTicket,
      breadcrumbs: false
    },
    {
      id: '02',
      title: 'Appointment',
      type: 'item',
      url: '/dashboard/appointment',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Passes',
      type: 'item',
      url: '/dashboard/passes',
      icon: icons.IconCards,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Calender',
      type: 'item',
      url: '/dashboard/calender',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: '05',
      title: 'FAQ',
      type: 'item',
      url: '/dashboard/faq',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: '06',
      title: 'Configure',
      type: 'item',
      url: '/dashboard/configure',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
