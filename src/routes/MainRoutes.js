import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { element } from 'prop-types';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const VisitorManagement = Loadable(lazy(() => import('views/Visitor')));
const AppointmentManagement = Loadable(lazy(() => import('views/Appointment')));
const PassesManagement = Loadable(lazy(() => import('views/Passes')));
const Policy = Loadable(lazy(() => import('views/Policy')));
const Metting = Loadable(lazy(() => import('views/Metting')));
const Email = Loadable(lazy(() => import('views/Email')));
const Task = Loadable(lazy(() => import('views/Task')));
const EmailTemplates = Loadable(lazy(() => import('views/EmailTemplates')));
const Document = Loadable(lazy(() => import('views/Documents')));
const Calender = Loadable(lazy(() => import('views/Calender')));
const AddTemplates = Loadable(lazy(() => import('views/EmailTemplates/AddTemplates')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'visitors',
          element: <VisitorManagement />,
          children: [
            {
              path: 'view/:userid',
              element: <VisitorManagement />
            }
          ]
        },
        {
          path: 'appointment',
          element: <AppointmentManagement />
        },
        {
          path: 'passes',
          element: <PassesManagement />
        },
        {
          path: 'faq',
          element: <VisitorManagement />
        },
        {
          path: 'calender',
          element: <Calender />
        },
        {
          path: 'configure',
          element: <VisitorManagement />
        }
      ]
    }
  ]
};

export default MainRoutes;
