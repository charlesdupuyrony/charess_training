import { RouteInfo } from './sidebar.metadata';
import {Role} from "../../core/models/security/role";
export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'MENUITEMS.MAIN.TEXT',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        roles: [],
        submenu: [],
    },
    // Admin Modules
    {
        path: '',
        title: 'training.configuration.text',
        moduleName: 'configuration',
        iconType: 'material-icons-two-tone',
        icon: 'settings',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        roles: [Role.SUPER],
        submenu: [
            {
                path: '/configuration/institution/page',
                title: 'training.configuration.list.facility',
                moduleName: 'configuration',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                roles: [Role.SUPER],
                submenu: [],
            },
            {
                path: '/admin/dashboard/dashboard2',
                title: 'MENUITEMS.HOME.LIST.DASHBOARD2',
                moduleName: 'configuration',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                roles: [''],
                submenu: [],
            },
            {
                path: '/admin/dashboard/teacher-dashboard',
                title: 'MENUITEMS.HOME.LIST.TEACHER-DASHBOARD',
                moduleName: 'teacher-dashboard',
                iconType: 'material-icons-two-tone',
                icon: '',
                class: '',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                roles: [''],
                submenu: [],
            },
            {
                path: '/admin/dashboard/student-dashboard',
                title: 'MENUITEMS.HOME.LIST.STUDENT-DASHBOARD',
                moduleName: 'student-dashboard',
                iconType: 'material-icons-two-tone',
                icon: '',
                class: '',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                roles: [''],
                submenu: [],
            },
        ],
    },
    {
    path: '',
    title: 'MENUITEMS.TEACHERS.TEXT',
    moduleName: 'teachers',
    iconType: 'material-icons-two-tone',
    icon: 'person',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/teachers/all-teachers',
    title: 'MENUITEMS.TEACHERS.LIST.ALL-TEACHERS',
    moduleName: 'teachers',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/teachers/add-teacher',
    title: 'MENUITEMS.TEACHERS.LIST.ADD-TEACHER',
    moduleName: 'teachers',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/teachers/edit-teacher',
    title: 'MENUITEMS.TEACHERS.LIST.EDIT-TEACHER',
    moduleName: 'teachers',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/teachers/about-teacher',
    title: 'MENUITEMS.TEACHERS.LIST.ABOUT-TEACHER',
    moduleName: 'teachers',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.STUDENTS.TEXT',
    moduleName: 'students',
    iconType: 'material-icons-two-tone',
    icon: 'people_alt',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/students/all-students',
    title: 'MENUITEMS.STUDENTS.LIST.ALL-STUDENTS',
    moduleName: 'students',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/students/add-student',
    title: 'MENUITEMS.STUDENTS.LIST.ADD-STUDENT',
    moduleName: 'students',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/students/edit-student',
    title: 'MENUITEMS.STUDENTS.LIST.EDIT-STUDENT',
    moduleName: 'students',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/students/about-student',
    title: 'MENUITEMS.STUDENTS.LIST.ABOUT-STUDENT',
    moduleName: 'students',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.COURSES.TEXT',
    moduleName: 'courses',
    iconType: 'material-icons-two-tone',
    icon: 'school',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/courses/all-courses',
    title: 'MENUITEMS.COURSES.LIST.ALL-COURSES',
    moduleName: 'courses',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/courses/add-course',
    title: 'MENUITEMS.COURSES.LIST.ADD-COURSE',
    moduleName: 'courses',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/courses/edit-course',
    title: 'MENUITEMS.COURSES.LIST.EDIT-COURSE',
    moduleName: 'courses',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/courses/about-course',
    title: 'MENUITEMS.COURSES.LIST.ABOUT-COURSE',
    moduleName: 'courses',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.LIBRARY.TEXT',
    moduleName: 'library',
    iconType: 'material-icons-two-tone',
    icon: 'local_library',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/library/all-assets',
    title: 'MENUITEMS.LIBRARY.LIST.ALL-LIBRARY',
    moduleName: 'library',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/library/add-asset',
    title: 'MENUITEMS.LIBRARY.LIST.ADD-LIBRARY',
    moduleName: 'library',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/library/edit-asset',
    title: 'MENUITEMS.LIBRARY.LIST.EDIT-LIBRARY',
    moduleName: 'library',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.DEPARTMENTS.TEXT',
    moduleName: 'departments',
    iconType: 'material-icons-two-tone',
    icon: 'business',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/departments/all-departments',
    title: 'MENUITEMS.DEPARTMENTS.LIST.ALL-DEPARTMENT',
    moduleName: 'departments',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/departments/add-department',
    title: 'MENUITEMS.DEPARTMENTS.LIST.ADD-DEPARTMENT',
    moduleName: 'departments',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/departments/edit-department',
    title: 'MENUITEMS.DEPARTMENTS.LIST.EDIT-DEPARTMENT',
    moduleName: 'departments',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.STAFF.TEXT',
    moduleName: 'staff',
    iconType: 'material-icons-two-tone',
    icon: 'face',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/staff/all-staff',
    title: 'MENUITEMS.STAFF.LIST.ALL-STAFF',
    moduleName: 'staff',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/staff/add-staff',
    title: 'MENUITEMS.STAFF.LIST.ADD-STAFF',
    moduleName: 'staff',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/staff/edit-staff',
    title: 'MENUITEMS.STAFF.LIST.EDIT-STAFF',
    moduleName: 'staff',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/staff/about-staff',
    title: 'MENUITEMS.STAFF.LIST.ABOUT-STAFF',
    moduleName: 'staff',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.HOLIDAY.TEXT',
    moduleName: 'holidays',
    iconType: 'material-icons-two-tone',
    icon: 'airline_seat_individual_suite',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/holidays/all-holidays',
    title: 'MENUITEMS.HOLIDAY.LIST.ALL-HOLIDAY',
    moduleName: 'holidays',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/holidays/add-holiday',
    title: 'MENUITEMS.HOLIDAY.LIST.ADD-HOLIDAY',
    moduleName: 'holidays',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/holidays/edit-holiday',
    title: 'MENUITEMS.HOLIDAY.LIST.EDIT-HOLIDAY',
    moduleName: 'holidays',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'MENUITEMS.FEES.TEXT',
    moduleName: 'fees',
    iconType: 'material-icons-two-tone',
    icon: 'monetization_on',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/admin/fees/all-fees',
    title: 'MENUITEMS.FEES.LIST.ALL-FEES',
    moduleName: 'fees',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/fees/add-fees',
    title: 'MENUITEMS.FEES.LIST.ADD-FEES',
    moduleName: 'fees',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/fees/edit-fees',
    title: 'MENUITEMS.FEES.LIST.EDIT-FEES',
    moduleName: 'fees',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/admin/fees/fee-receipt',
    title: 'MENUITEMS.FEES.LIST.FEE-RECEIPT',
    moduleName: 'fees',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    
    // Teacher Modules
    
    {
    path: '/teacher/dashboard',
    title: 'MENUITEMS.TEACHER.LIST.DASHBOARD',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Teacher'],
    submenu: [],
    },
    {
    path: '/teacher/lectures',
    title: 'MENUITEMS.TEACHER.LIST.LECTURES',
    moduleName: 'lectures',
    iconType: 'material-icons-two-tone',
    icon: 'menu_book',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Teacher'],
    submenu: [],
    },
    {
    path: '/teacher/leave-request',
    title: 'MENUITEMS.TEACHER.LIST.LEAVE-REQUEST',
    moduleName: 'leave-request',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Teacher'],
    submenu: [],
    },
    {
    path: '/teacher/exam-schedule',
    title: 'MENUITEMS.TEACHER.LIST.EXAM-SCHEDULE',
    moduleName: 'exam-schedule',
    iconType: 'material-icons-two-tone',
    icon: 'history_edu',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Teacher'],
    submenu: [],
    },
    {
    path: '/teacher/settings',
    title: 'MENUITEMS.TEACHER.LIST.SETTINGS',
    moduleName: 'settings',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Teacher'],
    submenu: [],
    },
    
    // Student Modules
    
    {
    path: '/student/dashboard',
    title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Student'],
    submenu: [],
    },
    {
    path: '/student/homework',
    title: 'MENUITEMS.STUDENT.LIST.HOMEWORK',
    moduleName: 'homework',
    iconType: 'material-icons-two-tone',
    icon: 'article',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Student'],
    submenu: [],
    },
    {
    path: '/student/leave-request',
    title: 'MENUITEMS.STUDENT.LIST.LEAVE-REQUEST',
    moduleName: 'leave-request',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Student'],
    submenu: [],
    },
    {
    path: '/student/timetable',
    title: 'MENUITEMS.STUDENT.LIST.TIME-TABLE',
    moduleName: 'timetable',
    iconType: 'material-icons-two-tone',
    icon: 'table_chart',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Student'],
    submenu: [],
    },
    {
    path: '/student/settings',
    title: 'MENUITEMS.STUDENT.LIST.SETTINGS',
    moduleName: 'settings',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Student'],
    submenu: [],
    },
    // Common Module
    
    {
    path: '',
    title: 'MENUITEMS.APPS.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    roles: ['All'],
    submenu: [],
    },
    {
    path: 'calendar',
    title: 'MENUITEMS.CALENDAR.TEXT',
    moduleName: 'calendar',
    iconType: 'material-icons-two-tone',
    icon: 'event_note',
    class: '',
    groupTitle: false,
    badge: 'New',
    badgeClass: 'badge bg-blue sidebar-badge float-end',
    roles: ['All'],
    submenu: [],
    },
    {
    path: 'task',
    title: 'MENUITEMS.TASK.TEXT',
    moduleName: 'task',
    iconType: 'material-icons-two-tone',
    icon: 'fact_check',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['All'],
    submenu: [],
    },
    {
    path: 'contacts',
    title: 'MENUITEMS.CONTACTS.TEXT',
    moduleName: 'contacts',
    iconType: 'material-icons-two-tone',
    icon: 'contacts',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['All'],
    submenu: [],
    },
    {
    path: '',
    title: 'Email',
    moduleName: 'email',
    iconType: 'material-icons-two-tone',
    icon: 'email',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['All'],
    submenu: [
    {
    path: '/email/inbox',
    title: 'Inbox',
    moduleName: 'email',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/email/compose',
    title: 'Compose',
    moduleName: 'email',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/email/read-mail',
    title: 'Read Email',
    moduleName: 'email',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'More Apps',
    moduleName: 'apps',
    iconType: 'material-icons-two-tone',
    icon: 'stars',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '5',
    badgeClass: 'badge bg-orange sidebar-badge float-end',
    roles: ['All'],
    submenu: [
    {
    path: '/apps/chat',
    title: 'Chat',
    moduleName: 'apps',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/apps/dragdrop',
    title: 'Drag & Drop',
    moduleName: 'apps',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/apps/contact-grid',
    title: 'Contact Grid',
    moduleName: 'apps',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/apps/support',
    title: 'Support',
    moduleName: 'apps',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Widgets',
    moduleName: 'widget',
    iconType: 'material-icons-two-tone',
    icon: 'widgets',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/widget/chart-widget',
    title: 'Chart Widget',
    moduleName: 'widget',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/widget/data-widget',
    title: 'Data Widget',
    moduleName: 'widget',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: '-- Components',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [],
    },
    {
    path: '',
    title: 'User Interface (UI)',
    moduleName: 'ui',
    iconType: 'material-icons-two-tone',
    icon: 'dvr',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/ui/alerts',
    title: 'Alerts',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/badges',
    title: 'Badges',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/chips',
    title: 'Chips',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/modal',
    title: 'Modal',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/buttons',
    title: 'Buttons',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/expansion-panel',
    title: 'Expansion Panel',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/bottom-sheet',
    title: 'Bottom Sheet',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/dialogs',
    title: 'Dialogs',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/cards',
    title: 'Cards',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/labels',
    title: 'Labels',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/list-group',
    title: 'List Group',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/snackbar',
    title: 'Snackbar',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/preloaders',
    title: 'Preloaders',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/progressbars',
    title: 'Progress Bars',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/tabs',
    title: 'Tabs',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/typography',
    title: 'Typography',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/ui/helper-classes',
    title: 'Helper Classes',
    moduleName: 'ui',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Forms',
    moduleName: 'forms',
    iconType: 'material-icons-two-tone',
    icon: 'subtitles',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/forms/form-controls',
    title: 'Form Controls',
    moduleName: 'forms',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/forms/advance-controls',
    title: 'Advanced Controls',
    moduleName: 'forms',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/forms/form-example',
    title: 'Form Examples',
    moduleName: 'forms',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/forms/form-validation',
    title: 'Form Validation',
    moduleName: 'forms',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/forms/wizard',
    title: 'Form Wizard',
    moduleName: 'forms',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/forms/editors',
    title: 'Editors',
    moduleName: 'forms',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Tables',
    moduleName: 'tables',
    iconType: 'material-icons-two-tone',
    icon: 'view_list',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/tables/basic-tables',
    title: 'Basic Tables',
    moduleName: 'tables',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/tables/material-tables',
    title: 'Material Tables',
    moduleName: 'tables',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/tables/ngx-datatable',
    title: 'ngx-datatable',
    moduleName: 'tables',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Medias',
    moduleName: 'media',
    iconType: 'material-icons-two-tone',
    icon: 'image_search',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/media/gallery',
    title: 'Image Gallery',
    moduleName: 'media',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Charts',
    moduleName: 'charts',
    iconType: 'material-icons-two-tone',
    icon: 'insert_chart',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '7',
    badgeClass: 'badge bg-green sidebar-badge float-end',
    roles: ['Admin'],
    submenu: [
    {
    path: '/charts/echart',
    title: 'Echart',
    moduleName: 'charts',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/charts/apex',
    title: 'Apex',
    moduleName: 'charts',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/charts/chartjs',
    title: 'ChartJS',
    moduleName: 'charts',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/charts/ngx-charts',
    title: 'Ngx-Charts',
    moduleName: 'charts',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/charts/gauge',
    title: 'Gauge',
    moduleName: 'charts',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Timeline',
    moduleName: 'timeline',
    iconType: 'material-icons-two-tone',
    icon: 'timeline',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/timeline/timeline1',
    title: 'Timeline 1',
    moduleName: 'timeline',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/timeline/timeline2',
    title: 'Timeline 2',
    moduleName: 'timeline',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Icons',
    moduleName: 'icons',
    iconType: 'material-icons-two-tone',
    icon: 'eco',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/icons/material',
    title: 'Material Icons',
    moduleName: 'icons',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/icons/font-awesome',
    title: 'Font Awesome',
    moduleName: 'icons',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Authentication',
    moduleName: 'authentication',
    iconType: 'material-icons-two-tone',
    icon: 'supervised_user_circle',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/authentication/signin',
    title: 'Sign In',
    moduleName: 'authentication',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/authentication/signup',
    title: 'Sign Up',
    moduleName: 'authentication',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/authentication/forgot-password',
    title: 'Forgot Password',
    moduleName: 'authentication',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/authentication/locked',
    title: 'Locked',
    moduleName: 'authentication',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/authentication/page404',
    title: '404 - Not Found',
    moduleName: 'authentication',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/authentication/page500',
    title: '500 - Server Error',
    moduleName: 'authentication',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Extra Pages',
    moduleName: 'extra-pages',
    iconType: 'material-icons-two-tone',
    icon: 'description',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/extra-pages/profile',
    title: 'Profile',
    moduleName: 'extra-pages',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/extra-pages/pricing',
    title: 'Pricing',
    moduleName: 'extra-pages',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/extra-pages/invoice',
    title: 'Invoice',
    moduleName: 'extra-pages',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/extra-pages/faqs',
    title: 'Faqs',
    moduleName: 'extra-pages',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/extra-pages/blank',
    title: 'Blank Page',
    moduleName: 'extra-pages',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Maps',
    moduleName: 'maps',
    iconType: 'material-icons-two-tone',
    icon: 'map',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/maps/google',
    title: 'Google Map',
    moduleName: 'maps',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '',
    title: 'Multi level Menu',
    moduleName: 'multilevel',
    iconType: 'material-icons-two-tone',
    icon: 'slideshow',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: ['Admin'],
    submenu: [
    {
    path: '/multilevel/first1',
    title: 'First',
    moduleName: 'multilevel',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/',
    title: 'Second',
    moduleName: 'secondlevel',
    iconType: '',
    icon: '',
    class: 'ml-sub-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [
    {
    path: '/multilevel/secondlevel/second1',
    title: 'Second 1',
    moduleName: 'secondlevel',
    iconType: '',
    icon: '',
    class: 'ml-sub-sub-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    {
    path: '/multilevel/secondlevel/second2',
    title: 'Second 2',
    moduleName: 'secondlevel',
    iconType: '',
    icon: '',
    class: 'ml-sub-sub-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    {
    path: '/multilevel/first3',
    title: 'Third',
    moduleName: 'multilevel',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    roles: [''],
    submenu: [],
    },
    ],
    },
    ];